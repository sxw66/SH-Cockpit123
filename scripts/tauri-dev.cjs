const { spawn, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const extraArgs = process.argv.slice(2);
const tauriArgs = ['dev', '--config', 'src-tauri/tauri.dev.conf.json', ...extraArgs];
const tauriCliJs = path.join(repoRoot, 'node_modules', '@tauri-apps', 'cli', 'tauri.js');
const viteEntry = path.join(repoRoot, 'node_modules', 'vite', 'bin', 'vite.js');

const env = {
  ...process.env,
  COCKPIT_TOOLS_PROFILE: process.env.COCKPIT_TOOLS_PROFILE || 'dev',
  COCKPIT_TOOLS_API_PORT: process.env.COCKPIT_TOOLS_API_PORT || '1456',
  VITE_COCKPIT_TOOLS_PROFILE: process.env.VITE_COCKPIT_TOOLS_PROFILE || 'dev',
};

let viteProcess = null;

function prependPath(entries) {
  const current = (env.PATH || '').split(';').filter(Boolean);
  const merged = [...entries, ...current.filter((entry) => !entries.includes(entry))];
  env.PATH = merged.join(';');
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    shell: false,
    env,
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(typeof result.status === 'number' ? result.status : 1);
  }
}

function runFinal(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    shell: false,
    env,
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  process.exit(typeof result.status === 'number' ? result.status : 1);
}

function ensureCargoAvailable() {
  const cargoBinDir = path.join(process.env.USERPROFILE || '', '.cargo', 'bin');
  const cargoExe = path.join(cargoBinDir, 'cargo.exe');
  const cargoCandidates = ['cargo', cargoExe].filter(Boolean);

  for (const candidate of cargoCandidates) {
    const result = spawnSync(candidate, ['--version'], {
      cwd: repoRoot,
      stdio: 'pipe',
      shell: false,
      env,
    });
    if (result.status === 0) {
      if (fs.existsSync(cargoExe)) {
        prependPath([cargoBinDir]);
      }
      return;
    }
  }

  console.error('\n[cockpit-tools] 未检测到 Rust/Cargo，无法启动 Tauri 开发模式。');
  console.error('[cockpit-tools] 我已尝试自动安装 Rust；若仍失败，请关闭并重新打开 Cursor/终端后再试。');
  console.error('[cockpit-tools] 也可手动安装：');
  console.error('  winget install Rustlang.Rustup');
  console.error('  winget install Microsoft.VisualStudio.2022.BuildTools');
  console.error('[cockpit-tools] 然后执行：npm run tauri:dev\n');
  process.exit(1);
}

function runSyncVersion() {
  run(process.execPath, [path.join(repoRoot, 'scripts', 'sync-version.js')]);
}

function runPrepareTauri() {
  run(process.execPath, [path.join(repoRoot, 'scripts', 'prepare-tauri.cjs')]);
}

function stopVite() {
  if (viteProcess && !viteProcess.killed) {
    try {
      viteProcess.kill();
    } catch {
      // ignore cleanup errors
    }
  }
}

function waitForDevServer(timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const result = spawnSync(
      process.execPath,
      ['-e', "fetch('http://127.0.0.1:1420').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"],
      { cwd: repoRoot, stdio: 'ignore', env },
    );
    if (result.status === 0) {
      return;
    }
    spawnSync('powershell.exe', ['-Command', 'Start-Sleep -Milliseconds 400'], {
      stdio: 'ignore',
    });
  }
  console.warn('[cockpit-tools] Vite 启动较慢，继续尝试连接 Tauri...');
}

function startViteDevServer() {
  runPrepareTauri();
  viteProcess = spawn(process.execPath, [viteEntry], {
    cwd: repoRoot,
    env,
    stdio: 'inherit',
    shell: false,
  });

  viteProcess.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }
    if (typeof code === 'number' && code !== 0) {
      process.exit(code);
    }
  });

  waitForDevServer();
}

function runTauriDevFinal(options = {}) {
  if (fs.existsSync(tauriCliJs)) {
    runFinal(process.execPath, [tauriCliJs, ...tauriArgs], options);
  }

  if (process.platform === 'win32') {
    runFinal('npx.cmd', ['tauri', ...tauriArgs], { shell: true, ...options });
  }

  runFinal('npx', ['tauri', ...tauriArgs], options);
}

process.on('exit', stopVite);
process.on('SIGINT', () => {
  stopVite();
  process.exit(130);
});
process.on('SIGTERM', () => {
  stopVite();
  process.exit(143);
});

ensureCargoAvailable();
prependPath([
  path.dirname(process.execPath),
  'C:\\Program Files\\Go\\bin',
]);
runSyncVersion();
startViteDevServer();
runTauriDevFinal();

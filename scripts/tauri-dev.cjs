const { spawn, spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const extraArgs = process.argv.slice(2);
const tauriArgs = ['dev', '--config', 'src-tauri/tauri.dev.conf.json', ...extraArgs];
const tauriCliJs = path.join(repoRoot, 'node_modules', '@tauri-apps', 'cli', 'tauri.js');
const viteEntry = path.join(repoRoot, 'node_modules', 'vite', 'bin', 'vite.js');
const cargoBinDir = path.join(process.env.USERPROFILE || '', '.cargo', 'bin');
const cargoExe = path.join(cargoBinDir, 'cargo.exe');

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

function fail(message) {
  console.error(`\n[cockpit-tools] ${message}\n`);
  process.exit(1);
}

function ensureCargoAvailable() {
  const candidates = [cargoExe, 'cargo'];
  for (const candidate of candidates) {
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

  fail(
    [
      '未检测到 Rust/Cargo，无法启动 Tauri 开发模式。',
      '请安装 Rust：https://rustup.rs/ （或 winget install Rustlang.Rustup）',
      '安装后重新打开终端，再执行：npm run tauri:dev',
    ].join('\n'),
  );
}

function runSyncVersion() {
  const result = spawnSync(process.execPath, [path.join(repoRoot, 'scripts', 'sync-version.js')], {
    cwd: repoRoot,
    stdio: 'inherit',
    env,
  });
  if (result.status !== 0) {
    fail('版本同步失败，请检查 scripts/sync-version.js 输出。');
  }
}

function runPrepareTauri() {
  const result = spawnSync(process.execPath, [path.join(repoRoot, 'scripts', 'prepare-tauri.cjs')], {
    cwd: repoRoot,
    stdio: 'inherit',
    env,
  });
  if (result.status !== 0) {
    console.warn('[cockpit-tools] prepare-tauri 清理旧进程失败，将继续尝试启动。');
  }
}

function freeDevServerPort() {
  if (process.platform !== 'win32') {
    return;
  }

  spawnSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      'Get-NetTCPConnection -LocalPort 1420 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }',
    ],
    { stdio: 'ignore' },
  );
}

function probeDevServer() {
  const probeScript = [
    "const http=require('http');",
    "const targets=['http://127.0.0.1:1420/','http://localhost:1420/'];",
    'let pending=targets.length;',
    'let ok=false;',
    'for (const url of targets) {',
    '  const req=http.get(url,(res)=>{',
    '    if(res.statusCode&&res.statusCode<500){ok=true;}',
    '    if(--pending===0)process.exit(ok?0:1);',
    '  });',
    '  req.on("error",()=>{if(--pending===0)process.exit(ok?0:1);});',
    '  req.setTimeout(2000,()=>{req.destroy();if(--pending===0)process.exit(ok?0:1);});',
    '}',
  ].join('');

  const result = spawnSync(process.execPath, ['-e', probeScript], {
    cwd: repoRoot,
    stdio: 'ignore',
    env,
  });
  return result.status === 0;
}

function waitForDevServer(timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (probeDevServer()) {
      console.log('[cockpit-tools] Vite 已就绪：http://localhost:1420');
      return;
    }
    if (viteProcess && viteProcess.exitCode !== null) {
      fail('Vite 进程已退出，启动失败。');
    }
    spawnSync('powershell.exe', ['-NoProfile', '-Command', 'Start-Sleep -Milliseconds 500'], {
      stdio: 'ignore',
    });
  }

  if (viteProcess && viteProcess.exitCode === null) {
    console.warn('[cockpit-tools] 未能探测到 Vite 响应，但进程仍在运行，继续启动 Tauri...');
    return;
  }

  fail('Vite 未能在 20 秒内启动，请检查 1420 端口是否被占用。');
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

function startViteDevServer() {
  if (probeDevServer()) {
    console.log('[cockpit-tools] 检测到 Vite 已在运行，跳过启动。');
    return;
  }

  freeDevServerPort();
  runPrepareTauri();

  console.log('[cockpit-tools] 正在启动 Vite...');
  viteProcess = spawn(process.execPath, [viteEntry], {
    cwd: repoRoot,
    env,
    stdio: 'inherit',
    shell: false,
  });

  viteProcess.on('error', (error) => {
    fail(`Vite 启动失败：${error.message}`);
  });

  waitForDevServer();
}

function runTauriDev() {
  if (!fs.existsSync(tauriCliJs)) {
    fail('未找到 @tauri-apps/cli，请先执行 npm install。');
  }

  console.log('[cockpit-tools] 正在启动 Tauri，首次编译可能需要 10-20 分钟，请耐心等待...');
  const result = spawnSync(process.execPath, [tauriCliJs, ...tauriArgs], {
    cwd: repoRoot,
    stdio: 'inherit',
    env,
  });

  stopVite();
  process.exit(typeof result.status === 'number' ? result.status : 1);
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
prependPath([path.dirname(process.execPath), 'C:\\Program Files\\Go\\bin']);
runSyncVersion();
startViteDevServer();
runTauriDev();

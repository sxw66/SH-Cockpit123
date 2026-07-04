const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const extraArgs = process.argv.slice(2);
const tauriArgs = ['dev', '--config', 'src-tauri/tauri.dev.conf.json', ...extraArgs];

const env = {
  ...process.env,
  COCKPIT_TOOLS_PROFILE: process.env.COCKPIT_TOOLS_PROFILE || 'dev',
  COCKPIT_TOOLS_API_PORT: process.env.COCKPIT_TOOLS_API_PORT || '1456',
  VITE_COCKPIT_TOOLS_PROFILE: process.env.VITE_COCKPIT_TOOLS_PROFILE || 'dev',
};

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
  const cargoCandidates = [
    'cargo',
    path.join(process.env.USERPROFILE || '', '.cargo', 'bin', 'cargo.exe'),
  ].filter(Boolean);

  for (const candidate of cargoCandidates) {
    const result = spawnSync(candidate, ['--version'], {
      cwd: repoRoot,
      stdio: 'pipe',
      shell: false,
      env,
    });
    if (result.status === 0) {
      return;
    }
  }

  console.error('\n[cockpit-tools] 未检测到 Rust/Cargo，无法启动 Tauri 开发模式。');
  console.error('[cockpit-tools] Windows 开发环境需要以下依赖：');
  console.error('  1. Node.js 18+，并在项目目录执行 npm install');
  console.error('  2. Rust 工具链：https://rustup.rs/');
  console.error('  3. Visual Studio Build Tools，勾选「使用 C++ 的桌面开发」');
  console.error('  4. Go 语言（sidecar 编译需要）：https://go.dev/dl/');
  console.error('[cockpit-tools] 全部安装完成后请重新打开终端，再执行：npm run tauri:dev\n');
  process.exit(1);
}

function runDevDirect() {
  run('npm.cmd', ['run', 'sync-version'], { shell: process.platform === 'win32' });
  runFinal('npx.cmd', ['tauri', ...tauriArgs], { shell: process.platform === 'win32' });
}

ensureCargoAvailable();

if (process.platform !== 'win32') {
  run('npm', ['run', 'sync-version']);
  runFinal('npx', ['tauri', ...tauriArgs]);
}

const vcvars64Path = 'C:\\Program Files (x86)\\Microsoft Visual Studio\\2022\\BuildTools\\VC\\Auxiliary\\Build\\vcvars64.bat';
const goBinPath = 'C:\\Program Files\\Go\\bin';

if (!fs.existsSync(vcvars64Path)) {
  console.warn('[cockpit-tools] 未找到 vcvars64.bat，将使用当前 shell 环境继续。');
  runDevDirect();
}

const tempScriptPath = path.join(os.tmpdir(), `cockpit-tools-tauri-dev-${process.pid}.cmd`);
const tauriCliPath = path.join(repoRoot, 'node_modules', '.bin', 'tauri.cmd');

if (!fs.existsSync(tauriCliPath)) {
  console.warn('[cockpit-tools] 未找到本地 tauri CLI，将回退到 npx tauri。');
  runDevDirect();
}

const quotedArgs = tauriArgs.map((arg) => {
  if (/[\s"]/u.test(arg)) {
    return `"${arg.replace(/"/g, '""')}"`;
  }
  return arg;
});

const scriptBody = [
  '@echo off',
  `set "PATH=${goBinPath};%PATH%"`,
  `call "${vcvars64Path}"`,
  'if errorlevel 1 exit /b %errorlevel%',
  'call npm.cmd run sync-version',
  'if errorlevel 1 exit /b %errorlevel%',
  `call "${tauriCliPath}" ${quotedArgs.join(' ')}`.trim(),
].join('\r\n');

fs.writeFileSync(tempScriptPath, scriptBody);

try {
  runFinal('cmd.exe', ['/d', '/c', tempScriptPath]);
} finally {
  fs.rmSync(tempScriptPath, { force: true });
}

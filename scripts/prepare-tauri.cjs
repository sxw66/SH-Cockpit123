const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

if (process.platform !== 'win32') {
  process.exit(0);
}

const repoRoot = path.resolve(__dirname, '..');
const targetExe = path.join(repoRoot, 'target', 'debug', 'cockpit_tools.exe');
const scriptPath = path.join(os.tmpdir(), `cockpit-prepare-tauri-${process.pid}.ps1`);
const script = [
  "$ErrorActionPreference = 'SilentlyContinue'",
  `$target = '${targetExe.replace(/'/g, "''")}'`,
  "$processes = Get-CimInstance Win32_Process -Filter \"Name = 'cockpit_tools.exe'\" | Where-Object { $_.ExecutablePath -and ($_.ExecutablePath.ToLowerInvariant() -eq $target.ToLowerInvariant()) }",
  'foreach ($process in @($processes)) {',
  '  Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue',
  '  Write-Output ("Stopped stale Cockpit Tools debug process PID " + $process.ProcessId)',
  '}',
].join('\r\n');

try {
  fs.writeFileSync(scriptPath, `\uFEFF${script}`, 'utf8');
  const result = spawnSync(
    'powershell.exe',
    ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', scriptPath],
    {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }

  if (result.status !== 0 && result.stderr) {
    console.warn(`[cockpit-tools] prepare-tauri warning: ${result.stderr.trim()}`);
  }
} catch (error) {
  console.warn(`[cockpit-tools] prepare-tauri warning: ${error instanceof Error ? error.message : String(error)}`);
} finally {
  fs.rmSync(scriptPath, { force: true });
}

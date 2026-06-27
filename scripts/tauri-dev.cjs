const { spawnSync } = require('node:child_process');
const path = require('node:path');

const PLATFORM_PACKAGE_TEST_INDEX_URL =
  'https://raw.githubusercontent.com/jlcodes99/cockpit-tools/platform-test/platform-packages/index.test.json';

const env = {
  ...process.env,
  COCKPIT_TOOLS_PROFILE: process.env.COCKPIT_TOOLS_PROFILE || 'dev',
  COCKPIT_TOOLS_API_PORT: process.env.COCKPIT_TOOLS_API_PORT || '1456',
  COCKPIT_PLATFORM_PACKAGE_INDEX_URL:
    process.env.COCKPIT_PLATFORM_PACKAGE_INDEX_URL || PLATFORM_PACKAGE_TEST_INDEX_URL,
  COCKPIT_PLATFORM_PACKAGE_STRICT_LOCAL_SOURCE:
    process.env.COCKPIT_PLATFORM_PACKAGE_STRICT_LOCAL_SOURCE || '1',
  VITE_COCKPIT_TOOLS_PROFILE: process.env.VITE_COCKPIT_TOOLS_PROFILE || 'dev',
};
const extraArgs = process.argv.slice(2);

const syncResult = spawnSync('npm', ['run', 'sync-version'], {
  stdio: 'inherit',
  env,
});

if (syncResult.status !== 0) {
  process.exit(syncResult.status ?? 1);
}

const tauriResult = spawnSync(
  'tauri',
  [
    'dev',
    '--config',
    'src-tauri/tauri.dev.conf.json',
    ...(process.platform === 'darwin' &&
    !extraArgs.some((arg) => arg === '--runner' || arg === '-r' || arg.startsWith('--runner='))
      ? ['--runner', path.resolve(__dirname, 'tauri-dev-app-runner.cjs')]
      : []),
    ...extraArgs,
  ],
  {
    stdio: 'inherit',
    env,
  },
);

process.exit(tauriResult.status ?? 1);

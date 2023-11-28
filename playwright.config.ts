// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn serve:prod',
    port: 3000,
    timeout: 120 * 100000,
    reuseExistingServer: undefined,
  },
  reporter: [['html', { outputFolder: 'test-report', open: 'never' }]],
}

export default config

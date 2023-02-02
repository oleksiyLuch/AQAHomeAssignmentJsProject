import { PlaywrightTestConfig } from '@playwright/test'
import { timeouts } from './lib/timeouts'
import { credentials } from './lib/credentions'

import { defineConfig, devices } from '@playwright/test'
export default defineConfig({
  globalTimeout: timeouts.globalTestsTimeout,
  timeout: timeouts.testTimeout,
  retries: process.env.CI ? 2 : 0,

  reporter: [['list'], ['html', { outputFolder: 'test-results/report' }]],
  testDir: './tests',
  outputDir: './test-results/failed',
  workers: process.env.CI ? 10 : undefined,

  use: {
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    baseURL: credentials.defaultUrl,
    viewport: { width: 1920, height: 1080 },
    headless: true,
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: timeouts.mediumTimeout,
    navigationTimeout: timeouts.mediumTimeout
  },
  expect: {
    timeout: timeouts.mediumTimeout,
    toMatchSnapshot: {
      maxDiffPixels: 30,
      maxDiffPixelRatio: 0.02
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
})

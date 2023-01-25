import { PlaywrightTestConfig } from "@playwright/test";
import { timeouts } from "./lib/timeouts";
import { credentials } from "./lib/credentions";

const config: PlaywrightTestConfig = {
  globalTimeout: timeouts.globalTestsTimeout,
  timeout: timeouts.testTimeout,
  retries: process.env.CI ? 2 : 0,

  reporter: [["list"], ["html", { outputFolder: "test-results/report" }]],
  testDir: "./tests",
  outputDir: "./test-results/failed",
  workers: process.env.CI ? 10 : undefined,

  use: {
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    baseURL: credentials.defaultUrl,
    viewport: { width: 1920, height: 1080 },
    headless: true,
    video: "on-first-retry",
    screenshot: "only-on-failure",
    actionTimeout: timeouts.mediumTimeout,
    navigationTimeout: timeouts.mediumTimeout,
  },
  expect: {
    timeout: timeouts.mediumTimeout,
    toMatchSnapshot: {
      maxDiffPixels: 30,
      maxDiffPixelRatio: 0.02,
    },
  },
  projects: [
    {
      name: "Chrome",
      use: { browserName: "chromium" },
      snapshotDir: `testData/snapshots/chromium`,
    },

    {
      name: "Safari",
      use: { browserName: "webkit" },
      snapshotDir: `testData/snapshots/safari`,
    },

    {
      name: "FireFox",
      snapshotDir: `testData/snapshots/firefox`,
      use: { browserName: "firefox" },
    },
  ],
};

export default config;

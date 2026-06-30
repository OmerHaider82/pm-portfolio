// playwright.config.js
// Configures Playwright's end-to-end tests. Unlike the Vitest unit tests
// (which render components in a simulated jsdom), these run against the real
// production build served by `vite preview` in a real browser.

import { defineConfig, devices } from "@playwright/test";

// Vite's preview server defaults to this port. We point both the server and
// the browser at the same URL so tests can navigate with relative paths.
const baseURL = "http://localhost:4173";

export default defineConfig({
  // Where the spec files live.
  testDir: "./e2e",

  // Fail the CI build if someone accidentally commits a test.only.
  forbidOnly: !!process.env.CI,

  // Retry once in CI to absorb the occasional flaky startup; never locally.
  retries: process.env.CI ? 1 : 0,

  // Produce the HTML report (uploaded as an artifact in CI). `open: never`
  // stops it from popping a browser open during headless CI runs.
  reporter: [["html", { open: "never" }]],

  use: {
    baseURL,
    // Capture a trace on the first retry to make failures easy to debug.
    trace: "on-first-retry",
  },

  // Build once, then serve the static bundle and wait for it to be reachable
  // before the first test starts. Playwright tears the server down afterwards.
  webServer: {
    command: "npm run build && npm run preview",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

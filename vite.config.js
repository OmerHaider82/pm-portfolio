/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// The site is served from the domain root on CloudFront/S3, so assets use
// the default "/" base in both dev and production.
export default defineConfig({
  base: "/",
  plugins: [react()],
  // Vitest configuration lives here under the `test` key.
  test: {
    // Simulate a browser DOM so React can render in Node.
    environment: "jsdom",
    // Allow describe/it/expect without importing them in every file.
    globals: true,
    // Run this file once before any test (registers jest-dom matchers).
    setupFiles: "./src/test/setup.js",
    // The e2e/ specs are Playwright tests, not Vitest — keep Vitest out of
    // them (its default glob would otherwise match *.spec.js and fail).
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
});

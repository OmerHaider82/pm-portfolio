import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// Turns OFF any ESLint rules that would conflict with Prettier's formatting,
// so the two tools never fight. Must come last in the config array to win.
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    // Test files use Vitest's global describe/it/expect (we enabled
    // `globals: true` in vite.config.js), so declare them here to keep
    // ESLint's no-undef rule happy without importing them everywhere.
    files: ["**/*.test.{js,jsx}", "src/test/**"],
    languageOptions: {
      globals: globals.vitest,
    },
  },
  {
    // Playwright config and E2E specs run in Node (not the browser), so they
    // use Node globals like `process` rather than browser ones.
    files: ["playwright.config.js", "e2e/**"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);

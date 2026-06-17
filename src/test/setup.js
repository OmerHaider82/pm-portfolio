// Test setup — runs once before the whole suite (see vite.config.js).
// Imports jest-dom, which adds friendly DOM matchers to `expect`,
// e.g. toBeInTheDocument(), toHaveTextContent(). Without this you'd
// only have the generic matchers like toBe() / toEqual().
import "@testing-library/jest-dom";

// Automatically unmount React trees and clean up the DOM after each
// test, so one test's output can't leak into the next.
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

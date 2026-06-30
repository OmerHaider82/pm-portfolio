// homepage.spec.js
// One end-to-end smoke test: load the real homepage in a browser and confirm
// the three key sections actually render for a visitor — the hero, the About
// section, and the Projects grid with its cards.

import { test, expect } from "@playwright/test";

test("homepage shows the hero, about, and projects sections", async ({
  page,
}) => {
  await page.goto("/");

  // Hero: the name (main heading) and tagline are the first thing a visitor sees.
  await expect(
    page.getByRole("heading", { level: 1, name: "Your Name" })
  ).toBeVisible();
  await expect(page.getByText(/I build thoughtful products/i)).toBeVisible();

  // About section.
  await expect(
    page.getByRole("heading", { name: "About" })
  ).toBeVisible();

  // Projects section, plus its cards (each project renders as an <article>).
  await expect(
    page.getByRole("heading", { name: "Projects" })
  ).toBeVisible();
  const cards = page.getByRole("article");
  await expect(cards).toHaveCount(3);
  await expect(cards.first()).toBeVisible();
});

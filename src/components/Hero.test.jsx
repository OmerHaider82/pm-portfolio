// Hero.test.jsx
// Verifies the hero banner renders its key pieces: the name heading,
// the tagline, and the two call-to-action buttons.

import { render, screen } from "@testing-library/react";
import Hero from "./Hero.jsx";

describe("Hero", () => {
  it("shows the name as the main (h1) heading", () => {
    render(<Hero />);
    // getByRole with level:1 finds the single top-level page heading.
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Your Name");
  });

  it("renders a tagline", () => {
    render(<Hero />);
    // Partial text match — we only assert a stable phrase, not the whole copy.
    expect(screen.getByText(/I build thoughtful products/i)).toBeInTheDocument();
  });

  it("renders both call-to-action links", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /view my work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /get in touch/i })
    ).toBeInTheDocument();
  });
});

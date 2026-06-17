// Footer.test.jsx
// Verifies the footer renders its contact links pointing at the right URLs.

import { render, screen } from "@testing-library/react";
import Footer from "./Footer.jsx";

describe("Footer", () => {
  it("renders the contact heading", () => {
    render(<Footer />);
    expect(
      screen.getByRole("heading", { name: /get in touch/i })
    ).toBeInTheDocument();
  });

  it("renders an email link with a mailto href", () => {
    render(<Footer />);
    const email = screen.getByRole("link", { name: /email/i });
    // toHaveAttribute checks the actual href value, not just the text.
    expect(email).toHaveAttribute("href", "mailto:you@example.com");
  });

  it("renders all four contact links", () => {
    render(<Footer />);
    ["Email", "GitHub", "LinkedIn", "Twitter"].forEach((label) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });
});

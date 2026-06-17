// App.test.jsx
// A "smoke test": render the whole page and confirm each major section
// shows up. If any import breaks or a section throws, this fails fast.

import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App (whole page)", () => {
  it("renders the hero, about, projects, and footer sections", () => {
    render(<App />);

    // Hero name as the top-level heading.
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Your Name"
    );

    // Section headings further down the page.
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /get in touch/i })
    ).toBeInTheDocument();
  });
});

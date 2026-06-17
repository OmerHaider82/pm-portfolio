// About.test.jsx
// Verifies the About section renders its heading and the skill tags.

import { render, screen } from "@testing-library/react";
import About from "./About.jsx";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about/i })
    ).toBeInTheDocument();
  });

  it("lists skill tags", () => {
    render(<About />);
    // A couple of the skills from the array should appear on screen.
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});

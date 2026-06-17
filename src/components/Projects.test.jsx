// Projects.test.jsx
// Verifies the Projects section renders its heading and exactly three
// project cards with their titles.

import { render, screen } from "@testing-library/react";
import Projects from "./Projects.jsx";

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
  });

  it("renders exactly three project cards", () => {
    render(<Projects />);
    // Each card is an <article>, which has the implicit ARIA role "article".
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("renders each placeholder project title", () => {
    render(<Projects />);
    expect(screen.getByText("Project One")).toBeInTheDocument();
    expect(screen.getByText("Project Two")).toBeInTheDocument();
    expect(screen.getByText("Project Three")).toBeInTheDocument();
  });
});

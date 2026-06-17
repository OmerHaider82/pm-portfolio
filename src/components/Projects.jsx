// Projects.jsx
// Holds the list of projects as plain data, then maps over it to render
// one <ProjectCard> each. To add/edit a project, just change this array —
// you never have to touch the markup.

import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

// Placeholder data. Swap the text, tags, and links for your real work.
const PROJECTS = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and why it's interesting. Replace with your own.",
    tags: ["React", "Vite"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "Another placeholder summary. Mention the problem you solved and the outcome.",
    tags: ["Node.js", "API"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "One more example card. Keep descriptions to a sentence or two for a clean look.",
    tags: ["CSS", "Design"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Responsive grid of cards — see Projects.css for the layout. */}
        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

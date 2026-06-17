// About.jsx
// A short bio section. Two paragraphs of placeholder text plus a small
// list of skills/tools. Edit freely — the layout adapts to the content.

import "./About.css";

export default function About() {
  // Edit this list to show your own skills. Rendered as tags below.
  const skills = ["JavaScript", "React", "CSS", "Node.js", "Figma", "Git"];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About</h2>

        <div className="about__grid">
          {/* Left column: your story. Replace with real copy later. */}
          <div className="about__bio">
            <p>
              Write a couple of sentences about who you are and what you care
              about. This is placeholder text — swap it for your own story,
              background, and the kind of work you enjoy.
            </p>
            <p>
              Add a second paragraph for extra detail: where you've worked, what
              you're currently exploring, or what you're looking for next.
            </p>
          </div>

          {/* Right column: a compact list of skills as tags. */}
          <aside className="about__skills">
            <h3 className="about__skills-title">Skills &amp; Tools</h3>
            <ul className="about__tags">
              {skills.map((skill) => (
                <li key={skill} className="about__tag">
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ProjectCard.jsx
// A single, reusable project card. It receives its content through props
// so the same component can render any number of projects. Keeping it
// "dumb" (no internal state) makes it easy to read and reuse.

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <article className="project-card">
      {/* Placeholder thumbnail. Replace with an <img> when you have one. */}
      <div className="project-card__thumb" aria-hidden="true" />

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {/* Tech tags for this project. */}
        <ul className="project-card__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {/* Link out to a live demo or repo. */}
        <a className="project-card__link" href={link}>
          View project →
        </a>
      </div>
    </article>
  );
}

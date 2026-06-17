// Footer.jsx
// Closing section with contact links. The links live in a small array so
// they're easy to edit. Update the hrefs with your real profiles/email.

import "./Footer.css";

// Edit these: label is what's shown, href is where it points.
const CONTACTS = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "GitHub", href: "https://github.com/yourname" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "Twitter", href: "https://twitter.com/yourname" },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer section">
      <div className="container footer__inner">
        <h2 className="section-title">Get in touch</h2>
        <p className="footer__lead">
          Have a question or want to work together? Reach out on any of these.
        </p>

        {/* Row of contact links. target/rel are safe defaults for external links. */}
        <nav className="footer__links">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.label}
            </a>
          ))}
        </nav>

        {/* Auto-updating copyright year. */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Your Name. Built with React + Vite.
        </p>
      </div>
    </footer>
  );
}

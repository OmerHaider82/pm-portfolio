// Header.jsx
// A slim sticky navigation bar. The links are plain anchors pointing at
// section ids (e.g. #about), so clicking them smoothly scrolls down the
// single page — no router needed.

import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Brand / logo — swap for your own name or initials. */}
        <a href="#top" className="site-header__brand">
          Your Name
        </a>

        {/* Primary nav. Each href matches an id further down the page. */}
        <nav className="site-header__nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

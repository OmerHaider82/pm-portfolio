// Hero.jsx
// The first thing visitors see: your name, a one-line tagline, and a
// couple of call-to-action buttons. Keep the copy short and punchy.

import "./Hero.css";

export default function Hero() {
  return (
    // id="top" is the scroll target for the brand link in the header.
    <section id="top" className="hero section">
      <div className="container hero__inner">
        {/* Small eyebrow line above the main heading. */}
        <p className="hero__eyebrow">Hi, my name is</p>

        <h1 className="hero__title">Your Name</h1>

        {/* Tagline — describe what you do in one sentence. */}
        <p className="hero__tagline">
          I build thoughtful products and clean, accessible web experiences.
          Replace this line with your own tagline.
        </p>

        {/* Two buttons: primary action + secondary. Edit the hrefs. */}
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View my work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

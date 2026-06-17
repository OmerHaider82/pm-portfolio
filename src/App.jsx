// App.jsx
// Top-level component. Its only job is to stitch the page sections
// together in order. Each section is its own small component, so this
// file stays readable and you can see the whole page at a glance.

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

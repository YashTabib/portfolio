
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Suspense fallback={<p className="loading">Loading...</p>}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Yash Sujit Tabib</p>
        <p>Designed and developed with React.</p>
      </footer>
    </>
  );
}

export default App;

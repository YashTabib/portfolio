
import React from "react";

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <h2>My Resume</h2>

      <p>
        View or download my resume to learn more about
        my education, technical skills, and projects.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        View Resume
      </a>

      <a href="/resume.pdf" download className="btn">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;

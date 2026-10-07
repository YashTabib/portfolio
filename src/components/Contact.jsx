
import React from "react";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <p>Interested in working together? Get in touch.</p>

      <div className="contact-links">
        <a href="mailto:your.email@example.com">
          Email Me
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;

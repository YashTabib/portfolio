
import React from "react";

const projects = [
  {
    title: "BiteBox",
    description:
      "A food ordering website designed with HTML and CSS.",
    tech: "HTML, CSS"
  },
  {
    title: "Menswear Website",
    description:
      "A responsive clothing website showcasing men's fashion.",
    tech: "HTML, CSS"
  },
  {
    title: "Movie Recommendation System",
    description:
      "A project that recommends movies based on user preferences.",
    tech: "Python, Machine Learning"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

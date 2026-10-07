
import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="intro">HELLO, I'M</p>

      <h1>Yash Sujit Tabib</h1>

      <h2>React Developer & Web Developer</h2>

      <p className="hero-text">
        I build responsive websites and enjoy learning
        new technologies to create useful digital experiences.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View My Projects</a>
        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About This Project</h1>
        <p className={styles.text}>
          <strong>Recipe Finder</strong> is a React-based web application that
          allows users to discover and explore delicious recipes from the
          Spoonacular API. Users can browse random recipes, view detailed
          information like ingredients and instructions, and save their favorite
          recipes for quick access later. This project helped me practice
          real-world skills like API integration, React Router, state management,
          and modular CSS styling.
        </p>

        <h2 className={styles.subheading}>About Me</h2>
        <p className={styles.text}>
          Hi! I’m <strong>Muddasir Butt</strong>, a passionate web developer currently
          learning React, backend technologies, and modern web development
          practices. Building projects like Recipe Finder allows me to sharpen my
          problem-solving skills and improve my understanding of frontend
          development.
        </p>

        <h2 className={styles.subheading}>Let’s Connect</h2>
        <ul className={styles.links}>
          <li>
            📂 Repo:{" "}
            <a
              href="https://github.com/muddasirbutt3/recipe-finder"
              target="_blank"
              rel="noreferrer"
            >
              github.com/muddasirbutt3/recipe-finder
            </a>
          </li>
          <li>
            💻 GitHub:{" "}
            <a
              href="https://github.com/muddasirbutt3"
              target="_blank"
              rel="noreferrer"
            >
              github.com/muddasirbutt3
            </a>
          </li>
          <li>
            📧 Email:{" "}
            <a href="mailto:muddasirbutt3@example.com">muddasirbutt3@example.com</a>
          </li>
          <li>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/muddasir-butt-bb9201335"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/muddasir-butt-bb9201335
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

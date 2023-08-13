import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    // Array of project objects: { title, image, deployedLink, githubLink }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

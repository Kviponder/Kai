import React from 'react';
import Project from '../Project';
import weBlog from "../../assets/Images/we-Blog.png";


function Portfolio() {
  const projects = [
    // Array of project objects: { title, image, deployedLink, githubLink }
    {title: "A Blog App", image: weBlog, deployedLink: "https://we-blog-122a1e05c829.herokuapp.com/", githubLink: "https://github.com/Kviponder/We-bLog"},
    {title: "Project 2", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
    {title: "Project 3", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
    {title: "Project 4", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
    {title: "Project 5", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
    {title: "Project 6", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
    {title: "Project 7", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
    {title: "Project 8", image: "https://via.placeholder.com/150", deployedLink: "https://www.google.com", githubLink: "https://www.github.com"},
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




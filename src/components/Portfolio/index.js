import React from "react";
import Project from "../Project";
import weBlog from "../../assets/Images/we-Blog.png";
import devSnippets from "../../assets/Images/DevSnippets.png";

function Portfolio() {
  const projects = [
    // Array of project objects: { title, image, deployedLink, githubLink }
    {
      title: "A Blog App",
      image: weBlog,
      deployedLink: "https://we-blog-122a1e05c829.herokuapp.com/",
      githubLink: "https://github.com/Kviponder/We-bLog",
    },
    {
      title: "A private code repository",
      image: devSnippets,
      deployedLink: "https://www.google.com",
      githubLink: "https://www.github.com",
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/150",
      deployedLink: "https://devsnippets-da01809da9d1.herokuapp.com/",
      githubLink: "https://github.com/Kviponder/DevSnippets",
    },
    {
      title: "Project 4",
      image: "https://via.placeholder.com/150",
      deployedLink: "https://www.google.com",
      githubLink: "https://www.github.com",
    },
    {
      title: "Project 5",
      image: "https://via.placeholder.com/150",
      deployedLink: "https://www.google.com",
      githubLink: "https://www.github.com",
    },
    {
      title: "Project 6",
      image: "https://via.placeholder.com/150",
      deployedLink: "https://www.google.com",
      githubLink: "https://www.github.com",
    },
    {
      title: "Project 7",
      image: "https://via.placeholder.com/150",
      deployedLink: "https://www.google.com",
      githubLink: "https://www.github.com",
    },
    {
      title: "Project 8",
      image: "https://via.placeholder.com/150",
      deployedLink: "https://www.google.com",
      githubLink: "https://www.github.com",
    },
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

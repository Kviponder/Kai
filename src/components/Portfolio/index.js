import React from "react";
import { FaLaptopCode, FaCode, FaMagic, FaBriefcase, FaUtensils } from 'react-icons/fa'; // Import the icons
import Project from "../Project";
import weBlog from "../../assets/Images/we-Blog.png";
import devSnippets from "../../assets/Images/DevSnippets.png";
import wardrobe from "../../assets/Images/Wizard.png";
import happy from "../../assets/Images/Happy.png";
import rc from "../../assets/Images/rc.png";

function Portfolio() {
  const projects = [
    // Array of project objects: { title, image, deployedLink, githubLink }
    {
      title: <><FaLaptopCode /> We-Blog a fullstack Blog App</>,
      image: weBlog,
      deployedLink: "https://we-blog-122a1e05c829.herokuapp.com/",
      githubLink: "https://github.com/Kviponder/We-bLog",
    },
    {
      title: <><FaCode /> A fullstack private code repository</>,
      image: devSnippets,
      deployedLink: "https://devsnippets-da01809da9d1.herokuapp.com/",
      githubLink: "https://github.com/Kviponder/DevSnippets",
    },
    {
      title: <><FaMagic /> Wardrobe Wizard Simplifying Your Closet Management</>,
      image: wardrobe,
      deployedLink: "https://wardrobewizard.herokuapp.com/",
      githubLink: "https://github.com/batwood99/Wardrobe-Wizard",
    },
    {
      title: <><FaBriefcase /> Happy Cleaning Co. A front-end cleaning service website</>,
      image: happy,
      deployedLink: "https://kviponder.github.io/happyCleaningCo/",
      githubLink: "https://github.com/Kviponder/happyCleaningCo",
    },
    {
      title: <><FaUtensils /> Roullette Chef a random recipe generator</>,
      image: rc,
      deployedLink: "https://kviponder.github.io/Roulette-Chef/",
      githubLink: "https://github.com/Kviponder/Roulette-Chef",
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

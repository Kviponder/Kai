function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project responsive">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="links responsive">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;

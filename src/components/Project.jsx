import React from "react";
import "../css/project.css";

const Project = ({ name, description, link, img, tech }) => {
  const handleClick = () => {
    window.open(link);
  };
  return (
    <div className="project-card" onClick={handleClick}>
      <div className="text-box">
        <h2 className="name">
          <a href={link} target="_blank">
            {name}
          </a>
        </h2>
        <p className="tech-stack">{tech.join(", ")}</p>
        <p className="description">{description}</p>
      </div>
      <div className="image-container">
        <img src={img} />
      </div>
    </div>
  );
};

export default Project;

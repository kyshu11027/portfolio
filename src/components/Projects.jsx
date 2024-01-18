import React from "react";
import Project from "./Project.jsx";
import ootd from "/assets/ootd.png";
import peakRec from "/assets/peak-rec.png";
import website from "/assets/website.png";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="container">
      <Project
        name="OOTD App"
        link="https://github.com/kyshu11027/OOTD"
        description="iOS App for fashion fanatics who want to build their virtual closet and log their favorite outfits."
        tech={["Storyboard", "Swift", "Firebase", "Figma"]}
        img={ootd}
      />
      <Project
        name="Peak Recognizer"
        link="https://github.com/kyshu11027/PeakIdentifier/"
        description="Data science project to recognize target peaks in microchip electrophoresis traces. "
        tech={["Python", "Jupyter", "Sci-kit Learn"]}
        img={peakRec}
      />
      <Project
        name="Personal Portfolio"
        link="https://github.com/kyshu11027/portfolio"
        description="My personal online portfolio that tells the world a bit about myself, lists my favorite projects, and shows my contact information."
        tech={["Javascript", "React", "Bootstrap"]}
        img={website}
      />
    </div>
  );
};

export default Projects;

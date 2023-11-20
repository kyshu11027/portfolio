import React from "react";
import "./about-me.css";

const AboutMe = () => {
  return (
    <div className="container-fluid">
      <div className="about-me-container row">
        <div className="about-me col-lg-8 col-md-7 col-sm-12">
          <img src="../src/assets/headshot.jpg" className="headshot" />
          <div className="about-me-text">
            <h3>hey, i'm kevin!</h3>
            <p>welcome to my personal website. </p>
            <p>
              i intend on making this platform an area for me to document my
              projects and progress as a software engineer.
            </p>
            <p>
              in may 2023, i graduated from the University of Southern
              California with a degree in biomedical engineering. from my
              studies, i found my interest in computer programming/science, and
              i've been pursuing a career in tech.
            </p>
            <p>
              i love to learn new skills and apply them to projects. feel free
              look through my linkedin and projects page. also, don't hesitate
              to reach out to me with any questions. I'd love to connect!
            </p>
          </div>
        </div>

        <div className="hobbies col-lg-4 col-md-5 col-sm-12">Hobbies</div>
      </div>
    </div>
  );
};

export default AboutMe;

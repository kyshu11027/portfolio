import React from "react";
import "./about-me.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me">
        <img src="../src/assets/headshot.jpg" className="headshot" />
        <p>hey there</p>
      </div>

      <div className="hobbies">Hobbies</div>
    </div>
  );
};

export default AboutMe;

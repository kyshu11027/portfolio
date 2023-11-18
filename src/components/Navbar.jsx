import React from "react";
import githubLogo from "../assets/github-mark.png";
import linkedinLogo from "../assets/LI-In-Bug.png";
import emailLogo from "../assets/email.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-top-row">
        <h1 className="nav-name">kevin shu</h1>

        <a href="https://github.com/kyshu11027" target="_blank">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/kyshu/" target="_blank">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="mailto:shuster5494@gmail.com" target="_blank">
          <img src={emailLogo} className="logo" alt="Email logo" />
        </a>
      </div>

      <div className="nav-bottom-row">
        <button className="nav-link">about me</button>
        <button className="nav-link">projects</button>
        <button className="nav-link">contact me</button>
      </div>
    </div>
  );
};

export default Navbar;

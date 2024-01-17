import React from "react";
import githubLogo from "/assets/github-mark.png";
import linkedinLogo from "/assets/LI-In-Bug.png";
import emailLogo from "/assets/email.png";
import "../css/navbar.css";
import { Link } from "react-router-dom";

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
        <Link className="nav-link" to="/">
          about me
        </Link>

        <Link className="nav-link" to="/projects">
          projects
        </Link>

        <Link className="nav-link" to="/contact-me">
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

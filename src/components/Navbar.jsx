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

        <div className="nav-profiles">
          <a href="https://github.com/kyshu11027" target="_blank">
            <img src={githubLogo} className="logo" alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/kyshu/" target="_blank">
            <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
          </a>
          <a href="mailto:kevinyshu@gmail.com" target="_blank">
            <img src={emailLogo} className="logo" alt="Email logo" />
          </a>
        </div>
      </div>

      <div className="row justify-content-left nav-bottom-row">
        <Link className="nav-link col-3 col-md-2" to="/">
          about me
        </Link>

        <Link className="nav-link col-3 col-md-2" to="/projects">
          projects
        </Link>

        <Link className="nav-link col-3 col-md-2" to="/skills">
          skills
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

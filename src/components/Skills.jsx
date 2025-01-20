import React from "react";
import "../css/skills.css";

const Skills = () => {
    return (
        <div className="skills-container container-fluid">
            <div className="row justify-content-center">
                <div className="skills-card col-12">
                    <div className="languages">
                        <h3> Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Javascript/Typescript</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Go</li>
                            <li>HTML/CSS</li>
                            <li>Swift</li>
                            <li>MATLAB</li>
                        </ul>
                    </div>
                    <div className="technologies">
                        <h3> Technologies</h3>
                        <ul>
                            <li>Git</li>
                            <li>Jupyter Notebook</li>
                            <li>Sci-kit Learn</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>Linux</li>
                            <li>Bash</li>
                            <li>Bootstrap</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

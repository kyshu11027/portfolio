import React from "react";
import Project from "./Project.jsx";
import ootd from "/assets/ootd.png";
import peakRec from "/assets/peak-rec.png";
import website from "/assets/website.png";
import pickpix from "/assets/pickpix.png";
import "../css/projects.css";

const Projects = () => {
    return (
        <div className="project-container">
            <Project
                name="PickPix"
                link="https://pickpix.vercel.app/"
                description="Browser application for social media users to share photos with their friends to determine the most post-worthy content."
                tech={[
                    "AWS (Lambdas, DynamoDB, S3)",
                    "Python",
                    "NextJS",
                    "TailwindCSS",
                    "Terraform"
                ]}
                img={pickpix}
                className="row"
            />
            <Project
                name="OOTD App"
                link="https://github.com/kyshu11027/OOTD"
                description="iOS App for fashion fanatics who want to build their virtual closet and log their favorite outfits."
                tech={["Storyboard", "Swift", "Firebase", "Figma"]}
                img={ootd}
                className="row"
            />
            <Project
                name="Peak Recognizer"
                link="https://github.com/kyshu11027/PeakIdentifier/"
                description="Data science project to recognize target peaks in microchip electrophoresis traces. "
                tech={["Python", "Jupyter", "Sci-kit Learn"]}
                img={peakRec}
                className="row"
            />
            <Project
                name="Personal Portfolio"
                link="https://github.com/kyshu11027/portfolio"
                description="My personal online portfolio that tells the world a bit about myself, lists my favorite projects, and shows my contact information."
                tech={["Javascript", "React", "Bootstrap"]}
                img={website}
                className="row"
            />
        </div>
    );
};

export default Projects;

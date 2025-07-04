import React from "react";
import Project from "./Project.jsx";
import ootd from "/assets/ootd.png";
import peakRec from "/assets/peak-rec.png";
import website from "/assets/website.png";
import pickpix from "/assets/pickpix.png";
import penny from "/assets/penny-logo.png";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="project-container">
      <Project
        name="Penny Financial Chatbot"
        link="https://pennyapp.kevinyshu.work/"
        description={
          <div>
            <p>
              A personal finance analyst that fetches user banking data to be
              fed as context to an LLM for financial advice. Sign up for a 1 day
              free trial and try it out!
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=8TAVY58alXA"
                target="_blank"
              >
                Demo Video
              </a>
            </p>
          </div>
        }
        tech={[
          "Golang",
          "Python",
          "NextJS",
          "Kafka",
          "LangChain",
          "MongoDB",
          "Supabase",
          "Plaid",
        ]}
        img={penny}
        className="row"
      />
      <Project
        name="PickPix"
        link="https://pickpix.kevinyshu.work/"
        description={
          <div>
            <p>
              Browser application for social media users to share photos with
              their friends to determine the most post-worthy content.{" "}
            </p>
            <p>
              <a
                href="https://github.com/kyshu11027/photo-ranker-backend"
                target="_blank"
              >
                Backend Repository
              </a>{" "}
              &emsp;{" "}
              <a
                href="https://github.com/kyshu11027/photo-ranker"
                target="_blank"
              >
                Frontend Repository
              </a>
            </p>
          </div>
        }
        tech={[
          "AWS (Lambdas, DynamoDB, S3)",
          "Python",
          "NextJS",
          "TailwindCSS",
          "Terraform",
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

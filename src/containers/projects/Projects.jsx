import React from "react";
import Article from "../../components/article/Article";
import { projects01, projects02, projects03, projects04, projects05 } from "./imports";
import "./projects.css";

const Projects = () => (
  <div className="ao__projects section__padding" id="projects">
    <div className="ao__projects-heading">
      <h1 className="gradient__text">
        I love to learn, <br /> Explore my latest projects.
      </h1>
    </div>
    <div className="ao__projects-container">
      <div className="ao__projects-container_groupA">
        <Article
          imgUrl={projects01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="ao__projects-container_groupB">
        <Article
          imgUrl={projects02}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={projects03}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={projects04}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={projects05}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Projects;

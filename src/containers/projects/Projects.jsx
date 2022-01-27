import React from "react";
import Article from "../../components/article/Article";
import { projects01, projects02, projects03, projects04, projects05, projects06, projects07 } from "./imports";
import "./projects.css";

const Projects = () => (
  <div className="ao__projects section__padding" id="projects">
    <div className="ao__projects-heading">
      <h1 className="gradient__text">
        I love to learn, <br /> Explore my latest projects.
      </h1>
    </div>
    <div className="ao__projects-container">
      {/* <div className="ao__projects-container_groupA">
        <Article
          imgUrl={projects01}
          date="Website Redesign"
          text="SEE International"
        />
      </div> */}
      <div className="ao__projects-container_groupB">
        {/* NEED TO MAKE THIS DYNAMIC */}
        <Article
          imgUrl={projects01}
          date="Website Redesign"
          text="SEE International"
        /><Article
          imgUrl={projects02}
          date="E-Commerce Website"
          text="JefmoCBD"
        />
        <Article
          imgUrl={projects03}
          date="Therapy Website"
          text="New Hope Family Counseling Center"
        />
        <Article
          imgUrl={projects04}
          date="Therapy Website"
          text="Revive Wellness"
        />
        <Article
          imgUrl={projects05}
          date="Website Redesign"
          text="Your Children's Trees"
        />
        <Article
          imgUrl={projects06}
          date="E-Commerce Website"
          text="Unapologetic LA"
        />
        <Article
          imgUrl={projects07}
          date="JavaScript Project"
          text="Weather App"
        />
      </div>
    </div>
  </div>
);

export default Projects;

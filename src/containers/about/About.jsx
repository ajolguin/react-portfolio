import React from "react";
import { Feature } from "../../components";
import "./about.css";

const About = () => {
  return (
    <div className="ao__about section__margin" id="about">
      <div className="ao__about-feature">
        <Feature
          title="About Me"
          text="Currently a WordPress Developer/Programmer for Purpose Driven Connection. I found a particular passion for Web Development and building products that makes the lives of others easier. Outside of work, I enjoy watching basketball, playing video games and hanging out with friends and family. This webpage is currently a work in progress and a project for myself to practice using HTML, CSS, JavaScript/jQuery, Bootstrap and more to build an interactive and responsive online portfolio."
        />
      </div>
      <div className="ao__about-heading">
        <h1 className="gradient__text">
          About Me
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="ao__about-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Education"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
      </div>
    </div>
  );
};

export default About;

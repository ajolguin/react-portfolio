import React from "react";
import { Feature } from "../../components";
import "./about.css";

const About = () => {
  return (
    <div className="ao__about section__margin" id="about">
      <div className="ao__about-feature">
        <Feature
          title="About Me"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="ao__about-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
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

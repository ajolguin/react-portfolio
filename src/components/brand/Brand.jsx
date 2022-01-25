import React from "react";
import "./brand.css";
import { linkedin, github } from "./imports";

const Brand = () => {
  return (
    <div className="ao__brand section__padding">
      <div>
        <a href="https://linkedin.com/in/ajolguin"><img src={linkedin} alt="LinkedIn"/></a>
      </div>
      <div>
      <a href="https://github.com/ajolguin"><img src={github} alt="Github" /></a>
      </div>
    </div>
  );
};

export default Brand;

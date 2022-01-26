import React from "react";
import { Feature } from "../../components";
import "./about.css";

const About = () => {
  return (
    <div className="ao__about section__margin" id="about">
      <div className="ao__about-heading">
        <h1 className="gradient__text">
          About Me
        </h1>
        <p>Technology has always been a significant part of my life. I've developed a passion to use the latest and modern tools to build aesthetically pleasing websites and helping businesses develop an online presence. Outside of work, I enjoy watching sports, playing video games and hanging out with friends and family. This webpage is currently a work in progress and a project for myself to practice my Front End development skills including React, HTML, CSS, JavaScript and more to build an interactive and responsive online portfolio.</p>
      </div>
      <div className="ao__about-container">
        <Feature
          title="Front End Developer"
          text="A challenge a day keeps me growing. I love to learn and practice my front end skills, which is why I decided to build this site using React."
        />
        <Feature
          title="UI/UX Designer"
          text="I enjoy designing with Figma and Adobe Illustrator/XD to make sure your site meets the best practices."
        />
        <Feature
          title="Lover of Life"
          text="Maintaining a perfect work-life balance is the key to my happiness. I enjoy networking and meeting like-minded invididuals to build memories. Let's connect!"
        />
      </div>
    </div>
  );
};

export default About;

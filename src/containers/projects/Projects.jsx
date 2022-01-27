import React from "react";
import Article from "../../components/article/Article";
import { projects01, projects02, projects03, projects04, projects05, projects06, projects07, projects08 } from "./imports";
import "./projects.css";

const Projects = () => (
  <div className="ao__projects section__padding" id="projects">
    <div className="ao__projects-heading">
      <h1 className="gradient__text">
        I love to learn, <br /> Explore my latest projects.
      </h1>
    </div>
    <div className="ao__projects-container">
      <div className="ao__projects-container_groupB">
        {/* NEED TO MAKE THIS DYNAMIC */}
        <Article
          linkURL="https://www.seeintl.org"
          imgUrl={projects01}
          date="Website Redesign"
          text="SEE International"
          desc={[<li>Led, strategized and collaborated with the design team to redesign over 100 pages following UI/UX strategies</li>, <li>Increased website load speed by over 80% from 17s to 2s</li>, <li>Drove highest-ever web traffic through improved SEO via Google Ads/Analytics and Yoast SEO</li>]}
          id="1"
        /><Article
          linkURL="https://jefmocbd.com"
          imgUrl={projects02}
          date="E-Commerce Website"
          text="JefmoCBD"
          desc={[<li>Developed an e-commerce platform using SquareUp/Weebly</li>, <li>Configured custom domain and migration using GoDaddy</li>]}
        />
        <Article
          linkURL="https://nhfccenter.com"
          imgUrl={projects03}
          date="Therapy Website Redesign"
          text="New Hope Family Counseling Center"
          desc={[<li>Redesigned and manage website using Wix with full responsiveness</li>, <li>Increased website load speed by over 80% from 17s to 2s</li>, <li>Drove highest-ever web traffic through improved SEO via Google Ads/Analytics and Yoast SEO</li>]}
        />
        <Article
          linkURL="https://yourchildrenstrees.com"
          imgUrl={projects04}
          date="Website Redesign"
          text="Your Children's Trees"
          desc={[<li>Redesigned and migrated Sitepad website to WordPress</li>, <li>New installation of WordPress and MySQL database and designed with Elementor</li>]}
        />
        <Article
          linkURL="https://revivelawellness.com"
          imgUrl={projects05}
          date="Therapy Website"
          text="Revive Wellness"
          desc={[<li>Developed using Wix and ensured device responsiveness</li>, <li>Added booking appointment and live chat functionality through custom plugins</li>]}
        />
        <Article
          linkURL="https://unapologeticla.com"
          imgUrl={projects06}
          date="E-Commerce Website"
          text="Unapologetic LA"
          desc={[<li>Developed an e-commerce platform using SquareUp/Weebly</li>, <li>Set up configurable products and fully launched store</li>]}
        />
        <Article
          linkURL="https://github.com/ajolguin/WeatherApp"
          imgUrl={projects07}
          date="JavaScript Project"
          text="Weather App"
          desc={[<li>Built a Weather App using HTML, CSS, JS, Bootstrap, and OpenWeatherMap API</li>, <li>Focused on practicing DOM manipulation, API calls, Bootstrap styling, and JavaScript</li>]}
        />
        <Article
          linkURL="https://github.com/ajolguin/React-Chat-App"
          imgUrl={projects08}
          date="React Project"
          text="Microsoft Teams Clone - Chat App"
          desc={[<li>Built a clone version of Microsoft Teams using React, ChatEngine, and SocketIO</li>]}
        />
      </div>
    </div>
  </div>
);

export default Projects;

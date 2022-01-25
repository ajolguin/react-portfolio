import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import Typical from 'react-typical';

const Header = () => {
  return (
    <div className="ao__header section__padding" id="home">
      <div className="ao__header-content">
        <h1 className="gradient__text">Hello, I'm Adrian Olguin</h1>
        <div className="gradient__text">
        <h2><span>I'm a </span> <Typical
        steps={['Web/Front End Developer', 1000, 'UI/UX Designer', 1000, 'Dog Dad', 1000, 'Video Game Enthusiast', 1000, 'Sports Fanatic', 1000]}
        loop={Infinity}
        wrapper="b"/>
      </h2>
      </div>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="ao__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="ao__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="ao__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;

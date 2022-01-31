import React from "react";
import "./header.css";
import adrian from "../../assets/adrian-bitmoji.png";
import Typical from "react-typical";

const Header = () => {
  return (
    <div className="ao__header section__padding" id="home">
      <div className="ao__header-content">
        <h1 className="gradient__text">Hi, I'm Adrian Olguin</h1>
        <div className="gradient__text">
          <h2>
            <span>I'm a </span>{" "}
            <Typical
              steps={[
                "Full Stack Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Dog Dad",
                1000,
                "Video Game Enthusiast",
                1000,
                "Sports Fanatic",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
        </div>
        <p>
          Helping small businesses create eye-catching and user-friendly
          websites to generate web traffic and grow their online presence using
          modern web technologies built to scale. Get in touch today!
        </p>
        <div className="ao__header-content__input">
          <a href="mailto:aolguin8097@gmail.com">
            <button type="button">Contact Me</button>
          </a>
        </div>
      </div>
      <div className="ao__header-image">
        <img src={adrian} alt="adrian" />
      </div>
    </div>
  );
};

export default Header;

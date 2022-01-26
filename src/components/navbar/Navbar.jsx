import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#experiences">Experiences</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ao__navbar">
      <div className="ao__navbar-links_logo">
          <h1 className="gradient__text"><a href="#home">ADRIAN OLGUIN</a></h1>
        </div>
      <div className="ao__navbar-links">
        <div className="ao__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ao__navbar-sign">
        <button type="button">Contact Me</button>
      </div>
      <div className="ao__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="ao__navbar-menu_container scale-up-center">
            <div className="ao__navbar-menu_container-links">
              <Menu />
              <div className="ao__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

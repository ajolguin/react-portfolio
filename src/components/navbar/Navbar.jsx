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
        <a href="mailto:aolguin8097@gmail.com"><button type="button">Contact Me</button></a>
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
                <a href="mailto:aolguin8097@gmail.com"><button type="button">Contact Me</button></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

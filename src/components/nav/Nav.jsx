import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <header className="nav-wrapper">
      <div className="container nav__container">
        <h5 className="nav__title">portfolio.</h5>

        <nav className="nav">
          <ul className="nav__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
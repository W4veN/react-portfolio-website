import React from "react";
import './nav.css';

const Nav= () => {
    return (
        <nav className='nav'>
            <ul>
                <li id="about">
                    <a href="#about">About</a>
                </li>
                <li id="resume">
                    <a href="#resume">Resume</a>
                </li>
                <li id="contact">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
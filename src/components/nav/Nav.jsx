import React from "react";
import './nav.css';

const Nav= () => {
    return (
        <nav className='nav'>
            <ul>
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
    )
}

export default Nav;
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h1> I'm Karol Wajs </h1>
        <p>
          {" "}
          and i'm working as Quality Engineer in Fandom. I have almost two years
          of experience, mostly focused on testing ads on world’s largest fan
          wiki platform Fandom, but also familiar with mobile apps. As a young
          dog owner almost all of my free time is dedicated to him, the rest I
          spend on watching horror movies, playing football and competitive
          video games.
        </p>
        <div className="btn-about">
          <a href="https://www.facebook.com/kr.wajs/">
            <i className="bx bxl-facebook-square"></i>
          </a>

          <a href="https://www.linkedin.com/in/karol-wajs-0b96111b9/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://github.com/W4veN">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

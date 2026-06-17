import React from "react";
import "./about.css";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h1>I'm Karol Wajs</h1>

        <p>
          Senior Quality Engineer with 5+ years of experience in software
          quality assurance, test automation, and quality strategy. I
          specialize in building scalable Playwright automation frameworks,
          improving CI/CD pipelines, and driving quality across complex web
          applications.
        </p>

        <p>
          My experience includes manual testing, API testing, accessibility,
          visual regression, contract testing, and AI-assisted testing
          workflows. I enjoy improving processes, mentoring, and delivering
          reliable software.
        </p>

        <p>
          Outside of work I enjoy football, gaming, horror movies, and spending
          time with my dog.
        </p>

        <div className="about__gallery">
          <img src={img1} alt="Interest 1" />
          <img src={img2} alt="Interest 2" />
          <img src={img3} alt="Interest 3" />
        </div>
      </div>
    </section>
  );
};

export default About;
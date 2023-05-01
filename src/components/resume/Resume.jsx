import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume">
      <div className="container resume__container">
        <h1> Resume </h1>
        <p> A summary of my education, work history, credentials, and other accomplishments and skills. </p>
          <br></br>
        <h2> Experience </h2>
        <p>
          {" "}
          2021-2023 <b>Quality Engineer Intern</b> Fandom{" "}
        </p>

        <p>
          {" "}
          I’m continuing my work in the ad-engineering team, in that time I had
          an opportunity to work part-time as a QA in mobile team to extend my
          point of view on quality in mobile apps. Lately I’ve started working
          with the team focused on the video player experience on the platform.
          I’m responsible for both manual and automation testing. Since the
          beginning of this year, I also care about the quality of
          advertisements on Metacritic, GameFAQs, Gamespot and TVGuide.
        </p>
        <p>
          {" "}
          2021-2022 <b>Junior Quality Engineer</b> Fandom{" "}
        </p>
        <p>
          {" "}
          I started in ad-engineering team, mostly focused on improving
          ad-experience, gaining first experience with testing web applications
          and tests automation using Webdriver, Playwright and Cypress.{" "}
        </p>
          <br></br>

          <h2> Skills and proficiencies </h2>
        <p>
          Creating test scenarios • Manual testing • Tests automation • ISTQB
          standards • Creating documentation and reporting bugs • Experience
          with testing web applications and mobile apps
        </p>
          <br></br>

          <h2> Education </h2>
        <p>2021 - 2022 </p>
        <p>
          Master's Degree in Internet of Things Adam Mickiewicz
          University/University of Economics, Poznań{" "}
        </p>
        <p>2017 - 2021 </p>
        <p>
          Bachelor's of Engineering Degree in Electronic and Telecommunications
          University of Technology, Poznań
        </p>
          <br></br>

          <h2> Technologies </h2>
        <p>WebdriverIO • Playwright • JavaScript • HTML • CSS • GitHub</p>
      </div>
    </section>
  );
};

export default Resume;

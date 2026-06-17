import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact__container">
        <h1>Let's work together</h1>

        <p className="contact__text">
          I'm currently open to new opportunities, collaborations, and
          interesting projects in QA, test automation, and software quality
          engineering. Feel free to reach out or connect with me below.
        </p>

        <div className="contact__buttons">
          <a href="https://www.facebook.com/kr.wajs/" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook-square"></i>
          </a>

          <a href="https://www.linkedin.com/in/karol-wajs-0b96111b9/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a href="https://github.com/W4veN" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

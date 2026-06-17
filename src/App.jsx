import React from "react";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Resume />
      <Contact />
    </>
  );
};

export default App;

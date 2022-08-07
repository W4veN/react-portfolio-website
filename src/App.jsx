import React from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

const App= () => {
    return (
        <>
            <Header />
            <About />
            <Experience />
            <Resume />
            <Contact />
        </>
    )
}

export default App;
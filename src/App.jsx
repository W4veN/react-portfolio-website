import React from "react";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

const App= () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Resume />
            <Contact />
        </>
    )
}

export default App;
import React from "react";
import Header from "~/components/Header";
import Hero from "./components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";

import "~/assets/scss/main.scss";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
        </>
    );
}

export default App;

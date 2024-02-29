import React, { useState, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Header from "~/components/Header";
import About from "~/pages/About";
import Skills from "./pages/Skills";
import Projects from "~/pages/Projects";

import "~/assets/scss/main.scss";
import Contact from "./pages/Contact";

function App() {
    library.add(fas, far, fab);

    const [showGoToTop, setShowGoToTop] = useState(false);
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        setShowBar(window.scrollY >= window.innerHeight);

        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 100);
            setShowBar(window.scrollY >= window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header showBar={showBar} />

            <main>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {showGoToTop && (
                <button
                    className="btn-scrolltop"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="var(--body-bg-bold)"></path>
                        <path
                            fill="var(--text-color)"
                            d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
                        ></path>
                    </svg>
                </button>
            )}
        </>
    );
}

export default App;

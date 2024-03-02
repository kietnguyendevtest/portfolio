import React, { useState, useEffect } from "react";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "~/components/Header";
import About from "~/pages/About";
import Skills from "./pages/Skills";
import Projects from "~/pages/Projects";
import Contact from "./pages/Contact";

import "~/assets/scss/main.scss";

function App() {
    library.add(fas, far, fab);

    const [showGoToTop, setShowGoToTop] = useState(false);
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        AOS.init({
            useClassNames: true,
            initClassName: null,
            animatedClassName: "animate__animated",
            anchorPlacement: "top-bottom",
        });
    }, []);

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
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                </button>
            )}
        </>
    );
}

export default App;

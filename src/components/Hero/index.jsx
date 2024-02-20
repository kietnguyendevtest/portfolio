import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
function Hero() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Software Engineer", "Web Developer", "UI/UX Designer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div id="home" style={{ paddingTop: "100px", height: "100vh" }}>
            <p style={{ fontSize: "4rem" }}>
                I'm a <span ref={el}></span>
            </p>
        </div>
    );
}

export default Hero;

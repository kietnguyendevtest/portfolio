import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
function Hero() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Software Engineer",
                "Front-end Developer",
                "UI/UX Designer",
            ],
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
        <div className="hero">
            <div className="hero-content">
                <div className="hero-title">HI, I AM NGUYEN MINH KIET</div>
                <div className="hero-textrun">
                    I'm a <span ref={el}></span>
                </div>
            </div>
        </div>
    );
}

export default Hero;

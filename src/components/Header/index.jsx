import React, { useState } from "react";
import Hero from "~/components/Hero";
import images from "~/assets/images";

function Header() {
    const [isDark, setDisDark] = useState(true);

    const handeChangeTheme = (e) => {
        if (!e.target.checked) {
            document.getElementsByTagName("html")[0].classList.remove("dark");
        } else {
            document.getElementsByTagName("html")[0].classList.add("dark");
        }
        setDisDark(!isDark);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper">
                        {/* Logo */}
                        <a href="/" className="logo">
                            <img src={images.logo} alt="Logo" />
                        </a>

                        {/* Navbar */}
                        <nav className="navbar">
                            <ul className="navbar__list">
                                <li className="navbar__item">
                                    <a href="#about">About</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="#skills">Skills</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="#projects">Projects</a>
                                </li>
                                <li className="navbar__item">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        {/* Action */}
                        <div className="header-action">
                            <label className="ui-switch">
                                <input
                                    type="checkbox"
                                    checked={isDark}
                                    onChange={handeChangeTheme}
                                />
                                <div className="slider">
                                    <div className="circle"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <Hero />
        </header>
    );
}

export default Header;

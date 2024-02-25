import React, { useState } from "react";
import Hero from "~/components/Hero";
import images from "~/assets/images";

function Header() {
    const [isDark, setDisDark] = useState(true);
    const [srcBgHero, setSrcBgHero] = useState(
        "https://images.unsplash.com/photo-1603575448360-153f093fd0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );

    const handeChangeTheme = (e) => {
        if (!e.target.checked) {
            document.getElementsByTagName("html")[0].classList.remove("dark");
            setSrcBgHero(
                "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            );
        } else {
            document.getElementsByTagName("html")[0].classList.add("dark");
            setSrcBgHero(
                "https://images.unsplash.com/photo-1603575448360-153f093fd0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            );
        }
        setDisDark(!isDark);
    };

    return (
        <header className="header">
            <img
                src={srcBgHero}
                alt=""
                className={"header-bg" + (isDark ? " bg-dark" : "")}
            />

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

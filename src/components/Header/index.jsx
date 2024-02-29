import React, { useState } from "react";
import Hero from "~/components/Hero";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
    const { showBar } = props;

    const [isDark, setDisDark] = useState(true);
    const [srcBgHero, setSrcBgHero] = useState(images.heroDark);

    const handeChangeTheme = (e) => {
        if (!e.target.checked) {
            document.getElementsByTagName("html")[0].classList.remove("dark");
            setSrcBgHero(images.heroLight);
        } else {
            document.getElementsByTagName("html")[0].classList.add("dark");
            setSrcBgHero(images.heroDark);
        }
        setDisDark(!isDark);
    };

    const renderHTML = () => {
        return (
            <>
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
            </>
        )
    }

    return (
        <header className="header">
            {
                showBar ? (
                    <div className="header-bar">
                        <input type="checkbox" name="menu-checkbox" id="menu-checkbox" className='menu-checkbox' hidden />

                        <label htmlFor="menu-checkbox" className='menu-bar'>
                            <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
                        </label>

                        <label htmlFor="menu-checkbox" className='menu-overlay'></label>

                        <div className="menu-drawer">
                            {renderHTML()}
                        </div>
                    </div>
                ) : (
                    <>
                        <img
                            src={srcBgHero}
                            alt=""
                            className={"header-bg" + (isDark ? " bg-dark" : "")}
                        />

                        <div className="header-top">
                            <div className="container">
                                <div className="header-top-wrapper">
                                    {renderHTML()}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            {/* Hero */}
            {!showBar && <Hero />}
        </header>
    );
}

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "~/assets/images/about.json";

function About() {
    return (
        <section id="about" className="about-container">
            <div className="container">
                <h2 className="hash-title">
                    <a href="#about">ABOUT ME</a>
                </h2>
                <div className="row row-cols-2 row-cols-lg-1">
                    <div className="col" data-aos="animate__fadeInLeft">
                        <figure className="about-img">
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice",
                                    },
                                }}
                            />
                        </figure>
                    </div>
                    <div className="col" data-aos="animate__fadeInRight">
                        <p className="about-title">
                            A passionate Full Stack Software Developer who loves
                            clean, simple & unique design. Strengths are
                            Back-end web application development and Front-end
                            technology.
                        </p>
                        <ul className="about-desc">
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-user" />
                                <span>Nguyen Minh Kiet</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-venus-mars" />
                                <span>Male</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-cake-candles" />
                                <span>10/09/1998</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-phone-flip" />
                                <span>0909 144 706</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                <span>kietnguyen.contact@gmail.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
                                <span>
                                    HUIT - Ho Chi Minh City University of
                                    Industry and Trade
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                                <span>Ho Chi Minh City, Viet Nam</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

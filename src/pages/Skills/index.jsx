import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "~/assets/images/about.json";

function Skills() {
    return (
        <section id="skills" className="about">
            <div className="container">
                <h2 className="hash-title">
                    <span>WHAT I DO</span>
                </h2>
                <div className="row row-cols-2">
                    <div className="col">
                        <figure>
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice",
                                    },
                                }}
                                height={400}
                                width={400}
                            />
                        </figure>
                    </div>
                    <div className="col">
                        <p className="about-title">
                            A passionate Full Stack Software Developer who loves
                            clean, simple & unique design. Strengths are Back-end
                            web application development and Front-end technology.
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
                                <span>0964 4567 24</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                <span>kietnguyen.contact@gmail.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
                                <span>
                                    HUIT - Ho Chi Minh City University of Industry
                                    and Trade
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

export default Skills;

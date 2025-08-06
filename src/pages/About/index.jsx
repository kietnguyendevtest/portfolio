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
                        <blockquote className="about-title">
                            &#10077;&nbsp;I'm a Software Engineer who loves simplicity, neatness and uniqueness.&nbsp;&#10078;
                        </blockquote>
                        <br />
                        <p className="about-title">
                            I started learning programming when I was 20 years old and it only took me six months to write my first
                            application using my programming skills. Since then, I became a website programmer with nearly 5
                            years of experience, working as a front-end dev for 2 companies, along with a few personal projects and freelance.

                        </p>
                        <br />
                        <p className="about-title">
                            Thanks to that, I have experience in front-end and back-end.
                        </p>
                        <br />
                        <p className="about-title">
                            In recent years, I have been very focused on programming and website development. Now I am very
                            confident that my abilities can meet the requirements of the business.
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
                                <span>kietnm.contact@gmail.com</span>
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

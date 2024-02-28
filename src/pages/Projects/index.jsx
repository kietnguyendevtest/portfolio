import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardContent, CardHover } from "~/components/Card";

function Projects() {
    return (
        <div id="projects" className="projects-container">
            <div className="container">
                {/* <h2 className="hash-title">
                <span>OPEN SOURCE PROJECTS</span>
            </h2> */}

                <br /> <br /> <br />

                <ul>
                    <li>
                        <Card>
                            <a
                                href="https://nmkiet.io.vn/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CardContent>
                                    <FontAwesomeIcon icon="fa-solid fa-code" />
                                    <p>Grocery Mart</p>
                                    <span>Ecommerce website</span>

                                </CardContent>
                                <CardHover>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon="fa-solid fa-toolbox" />
                                            <span>Grocery Mart</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
                                            <span>Build and develop ecommerce&nbsp;website</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon="fa-solid fa-code" />
                                            <span>HTML, CSS, SCSS, JS</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon="fa-solid fa-link" />
                                            <i>www.nmkiet.io.vn</i>
                                        </li>
                                    </ul>
                                </CardHover>
                            </a>
                        </Card>
                    </li>
                    <li style={{ marginTop: "50px" }}>
                        <a
                            href="https://kietnm-landing-celobank.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Landing CeloBank
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kietnm-landing-besnik.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Landing Besnik
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kietnm-landing-dental-care.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Landing Dental Care
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kietnm-landing-lesson.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Landing Lesson
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kietnm-reactjs.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CRUD ReactJs
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kietnm-nextjs.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CRUD NextJs
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;

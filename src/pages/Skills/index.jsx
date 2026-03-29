import React from "react";
import Lottie from "react-lottie";
import * as animationData from "~/assets/images/skills.json";

function Skills() {
    return (
        <section id="skills" className="skills-container">
            <div className="container">
                <h2 className="hash-title">
                    <a href="#skills">WHAT I DO</a>
                </h2>
                <div className="row row-cols-2 row-cols-lg-1">
                    <div className="col" data-aos="animate__zoomIn">
                        <p className="skills-title">
                            Crazy full stack developer who wants to explore
                            every tech stack.
                        </p>
                        <ul className="skills-desc">
                            <li>
                                <div className="skills-group">
                                    <span>Programming languages</span>
                                </div>
                                <ul>
                                    <li>
                                        &#8226;&nbsp; JavaScript (TypeScript)
                                    </li>
                                    <li>&#8226;&nbsp; .Net (C#), Java, PHP</li>
                                    <li>
                                        &#10149; I'm quite confident that I can catch up with other languages when needed very fast
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Front-end</span>
                                </div>
                                <ul>
                                    <li>
                                        &#8226;&nbsp; ReactJS, NextJS (TypeScript):  Hook, Redux, Zustand, React Query, React Hook Form, Yup, Formik, Axios, Vite
                                    </li>
                                    <li>&#8226;&nbsp; HTML, CSS, Responsive, SASS (7-1 pattern), Semantic, SEO</li>
                                    <li>
                                        &#8226;&nbsp; Ant Design, Tailwind, MUI, Boostrap, AG-Grid, Telerik UI, Highcharts
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Back-end</span>
                                </div>
                                <ul>
                                    <li>&#8226;&nbsp; Protocols: REST, HTTP(S)</li>
                                    <li>
                                        &#8226;&nbsp; Frameworks/Libraries: Node.js, Express.js, ASP․NET Core
                                    </li>
                                    <li>
                                        &#8226;&nbsp; OOP, WebSocket (SignalR)
                                    </li>
                                    <li>
                                        &#8226;&nbsp; Database:  MongoDB, MS SQL (Store Procedure, Function, Trigger,...), MySQL, PostgreSQL
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>DevOps</span>
                                </div>
                                <ul>
                                    <li>&#8226;&nbsp; Linux, Docker, IIS</li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Dev Tools</span>
                                </div>
                                <ul>
                                    <li>&#8226;&nbsp; Git, Github, Gitlab, Postman, VS Code, Figma, React Developer Tool, Redux Dev Tool</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col" data-aos="animate__zoomIn">
                        <figure className="skills-img">
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
                </div>
            </div>
        </section>
    );
}

export default Skills;

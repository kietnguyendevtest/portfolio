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
                    <div className="col">
                        <p className="skills-title">
                            Crazy full stack developer who wants to explore
                            every tech stack.
                        </p>
                        <ul className="skills-desc">
                            <li>
                                <div className="skills-group">
                                    <span>Front-end</span>
                                </div>
                                <ul>
                                    <li>
                                        &#8226;&nbsp; ReactJS, NextJS
                                        (TypeScript)
                                    </li>
                                    <li>&#8226;&nbsp; HTML, CSS, JavaScript</li>
                                    <li>
                                        &#8226;&nbsp; Responsive, SASS (7-1
                                        pattern)
                                    </li>
                                    <li>&#8226;&nbsp; Semantic, SEO basic</li>
                                    <li>
                                        &#8226;&nbsp; Boostrap, Material UI,
                                        AG-Grid, Telerik UI,...
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="skills-group">
                                    <span>Back-end</span>
                                </div>
                                <ul>
                                    <li>&#8226;&nbsp; C# .NET, NodeJS, OOP</li>
                                    <li>
                                        &#8226;&nbsp; Web API, Web-socket
                                        SignalR
                                    </li>
                                    <li>
                                        &#8226;&nbsp; Database: SQL Server
                                        (Store Procedure, Function,
                                        Trigger,...), Postgres, MongoDB
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
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

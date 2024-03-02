import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHover } from "~/components/Card";
import { dataProjects } from "~/data";

function Projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (dataProjects) setData(dataProjects);
    }, []);

    return (
        <section id="projects" className="projects-container">
            <div className="container">
                <h2 className="hash-title">
                    <a href="#projects">OPEN SOURCE PROJECTS</a>
                    <a href="#projects">PROJECTS</a>
                </h2>

                <div
                    className="row row-cols-xxl-3 row-cols-lg-2 row-cols-md-1 gy-4"
                    data-aos="animate__slideInUp"
                >
                    {data.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <Card>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <CardContent>
                                            <FontAwesomeIcon icon="fa-solid fa-computer" />
                                            <p>{item.project_name}</p>
                                            <span>{item.title}</span>
                                        </CardContent>
                                        <CardHover>
                                            <ul>
                                                <li>
                                                    <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                                                    <span>
                                                        {item.project_name}
                                                    </span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
                                                    <span>{item.desc}</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="fa-solid fa-code" />
                                                    <span>{item.tech}</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon="fa-solid fa-link" />
                                                    <i>{item.link}</i>
                                                </li>
                                            </ul>
                                        </CardHover>
                                    </a>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;

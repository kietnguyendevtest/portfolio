import React from "react";
import Lottie from "react-lottie";
import * as animationData from "~/assets/images/about.json";

function About() {
    return (
        <section id="about" className="about">
            <h2 className="about__heading">ABOUT ME</h2>
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
                    A passionate Full Stack Software Developer who loves clean,
                    simple & unique design.
                    {/* Almost 3 years of experience in
                    programming with good communication and quick learning
                    skills. Strengths are Back-end web application development
                    and Front-end technology. Ability to learn and apply new
                    technology quickly. */}
                </div>
            </div>
        </section>
    );
}

export default About;

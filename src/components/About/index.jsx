import React from "react";
import images from "~/assets/images";

function About() {
    return (
        <section id="about" className="about">
            <h2 className="about__heading">ABOUT ME</h2>
            <div className="row row-cols-2">
                <div className="col">
                    <figure>
                        <img
                            src={images.aboutImg}
                            alt=""
                            className="about_img"
                        />
                    </figure>
                </div>
                <div className="col">info</div>
            </div>
        </section>
    );
}

export default About;

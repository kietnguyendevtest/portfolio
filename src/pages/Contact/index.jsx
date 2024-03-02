import React from "react";
import images from "~/assets/images";
import Social from "~/components/Social";

function Contact() {
    return (
        <section id="contact" className="contact-container">
            <div className="container">
                <h2 className="hash-title">
                    <a href="#contact">CONTACT ME</a>
                </h2>
                <div className="row row-cols-2 row-cols-lg-1 gy-4">
                    <div className="col">
                        <div>
                            <p
                                className="contact-title"
                                data-aos="animate__pulse"
                            >
                                &#10077; Discuss a project or just want to say
                                hi? <br /> My inbox is open for all. &#10078;
                            </p>

                            <ul>
                                <li>
                                    <b>Email:</b> kietnguyen.contact@gmail.com
                                </li>
                                <li>
                                    <b>Phone:</b> 0909 144 706
                                </li>
                            </ul>

                            <Social />
                        </div>
                    </div>
                    <div className="col">
                        <div className="avatar">
                            <img src={images.avatar} alt="" />
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    Copyright © 2024. All right reserved. This website is made
                    with by kietnm
                </footer>
            </div>
        </section>
    );
}

export default Contact;

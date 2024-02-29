import React from "react";
import images from "~/assets/images";
import Social from "~/components/Social";

function Contact() {
    return (
        <section id="contact" className="contact-container" style={{ height: "100vh" }}>
            <div className="container">
                <h2 className="hash-title">
                    <span>REACH OUT TO ME!</span>
                </h2>
                <div className="row row-cols-2">
                    <div className="col">
                        <p className="contact-title">
                            Discuss a project or just want to say hi? <br />
                            My inbox is open for all.
                        </p>

                        <ul>
                            <li>
                                <b>Email:</b> kietnguyen.contact@gmail.com
                            </li>
                            <li>
                                <b>Phone:</b> 0964 4567 24
                            </li>
                        </ul>

                        <Social />
                    </div>
                    <div className="col">
                        <div className="avatar">
                            <img src={images.avatar} alt="" />
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    Copyright © 2024. All right reserved | This website is made
                    with by kietnm
                </footer>
            </div>
        </section>
    );
}

export default Contact;

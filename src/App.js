import React, { useEffect } from "react";
import "./assets/scss/main.scss";

function App() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                <li>
                    <a href="https://nmkiet.io.vn/" target="_blank">Ecommerce Grocery</a>
                </li>
                <li>
                    <a href="https://kietnm-landing-celobank.vercel.app/" target="_blank">Landing CeloBank</a>
                </li>
                <li>
                    <a href="https://kietnm-landing-besnik.vercel.app/" target="_blank">Landing Besnik</a>
                </li>
                <li>
                    <a href="https://kietnm-landing-dental-care.vercel.app/" target="_blank">Landing Dental Care</a>
                </li>
                <li>
                    <a href="https://kietnm-landing-lesson.vercel.app/" target="_blank">Landing Lesson</a>
                </li>
                <li>
                    <a href="https://kietnm-reactjs.vercel.app/" target="_blank">CRUD ReactJs</a>
                </li>
                <li>
                    <a href="https://kietnm-nextjs.vercel.app" target="_blank">CRUD NextJs</a>
                </li>
            </ul>
        </>
    );
}

export default App;

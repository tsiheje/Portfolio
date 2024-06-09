import React from "react";
import sary from "../asset/image 3.png";
import Down from "../asset/images/Down.png";
import cv from "../asset/Rasolofoniaina Tsiheje Marie Mickaelio.pdf"; 

const About = () => {
    return(
        <div className="about" id="about">
            <div className="about-content">
                <div className="sary">
                    <img src={sary} alt="" width={400}/>
                </div>
                <div className="separateur">
                    <div className="separateur-haut"></div>
                    <div className="separateur-cercle"></div>
                    <div className="separateur-bas"></div>
                </div>
                <div className="aprops">
                <p>As a full-stack developer and web integrator, I oversee all stages of development, from user interface design to database management. My mastery of React and back-end technologies like Node.js and Express enables me to create comprehensive and efficient solutions. I prioritize user experience and application performance.</p>
                <p>My experience in web integration has allowed me to work on various projects, ensuring compatibility and responsiveness across different devices and browsers.I am always seeking new opportunities to apply and deepen my skills in full-stack development and web integration. I am prepared to tackle any challenge to deliver high-quality solutions that meet my clients' needs.</p>
                <p>For more details about my background and skills, you can download my CV below.</p>
                    <a href={cv} download><p>Download CV</p><img src={Down} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default About;
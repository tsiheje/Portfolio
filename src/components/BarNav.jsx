import React from "react";
import { NavLink } from "react-router-dom";
import Github from "../asset/github.png";
import facebook from "../asset/facebook.png"
import linkedin from "../asset/linkedin.png";

const BarNav = () => {
    return(
        <div className="navbar">
            <div className="logo">
                Mickaelio<span>.</span>
            </div>
            <div className="lien">
                <a href="#home">
                    Home
                </a>
                <a href="#about">
                    About
                </a>
                <a href="#skills">
                    Skills
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#contact">
                    Contact
                </a>
            </div>
            <div className="sociaux">
                <a href="https://www.facebook.com/Rasolofoniaina.Mickaelio/" target="_blank">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/rasolofoniaina-tsiheje-marie-mickaelio3/" target="_blank">
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/tsiheje" target="_blank">
                    <img src={Github} alt="" />
                </a>
            </div>
        </div>
    )
}

export default BarNav;
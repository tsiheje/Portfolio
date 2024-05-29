import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Github from "../asset/github (2).png";
import facebook from "../asset/facebook (2).png"
import linkedin from "../asset/linkedin (2).png";
import Menu from "../asset/images/Menu.png";

const BarNav = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
        <div className="navbar">
            <div className="logo">
                Mickaelio<span>.</span>
            </div>
            <div className={`navbar-lien ${isOpen ? "active" : ""}`}>
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
                        <img src={facebook} alt="" width={40}/>
                    </a>
                    <a href="https://www.linkedin.com/in/rasolofoniaina-tsiheje-marie-mickaelio3/" target="_blank">
                        <img src={linkedin} alt="" width={40}/>
                    </a>
                    <a href="https://github.com/tsiheje" target="_blank">
                        <img src={Github} alt="" width={40}/>
                    </a>
                </div>
            </div>
            <div className="menu">
                <img src={Menu} alt="" width={40} onClick={toggleMenu}/>
            </div>
        </div>
    )
}

export default BarNav;
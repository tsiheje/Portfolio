import React from "react";
import sary from "../asset/Screenshot 2023-12-04 154811.png";

const Home = () => {
    return(
        <div className="home" id="home">
            <div className="description">
                <div className="nom">
                    <p>HELLO</p>
                    <p>I'M <span>MICKAELIO</span></p>
                    <p>Welcome to my personal website!👋</p>
                    <a href="#about"> Learn more about me</a>   
                </div>
            </div>
            <div className="sary">
                <div className="fond"></div>
                <div className="fond"></div>
                <div className="fond"></div>
                <div className="font">
                    <img src={sary} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;
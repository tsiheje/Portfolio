import React from "react";
import sary from "../asset/image 3.png";
import fleche from "../asset/fleche.png"
const Home = () => {
    return(
        <div className="home" id="home">
            <div className="description">
                <div className="nom">
                    <h2>Hello,</h2>
                    <h1>I'm <span data-text='Mickaelio'>Mickaelio</span></h1>
                    <p>Welcome to my personal website!👋</p>
                    <a href="#about">
                        Learn more about me
                        <img src={fleche} alt=""/>
                    </a>   
                </div>
            </div>
            <div className="sary">
                <div className="font">
                    <img src={sary} alt="" width={400}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
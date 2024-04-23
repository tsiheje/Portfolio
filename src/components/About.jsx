import React from "react";
import sary from "../asset/image 3.png";
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
                    <p>I am Mickaelio, a passionate developer with a primary expertise in creating interactive and responsive experiences using ReactJS. Additionally, as a seasoned system and network administrator, I have gained a strong experience in designing, implementing, and maintaining reliable and secure IT infrastructures. My portfolio showcases my achievements in these fields, demonstrating my commitment to delivering innovative technical solutions while ensuring stability and performance of applications and infrastructures.</p>
                    <p>As a dedicated professional in development and system/network administration, I am open to all freelance opportunities. Whether it's building innovative ReactJS applications or managing complex IT infrastructures, I am ready to bring my expertise and dedication to every project to achieve exceptional outcomes.</p>
                    <p>à la recherche de nouvelles opportunités pour élargir mes compétences et améliorer mon expertise.Doté d’un esprit curieux et rigoureux. Mon parcours académique et mes projets personnels m’ont permis de développer ma polyvalence et ma capacité à travailler efficacement en équipe</p>
                </div>
            </div>
        </div>
    )
}

export default About;
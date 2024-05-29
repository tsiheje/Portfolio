import React from "react";
import OneNote from "../asset/images/OneNote.png";
import Portfolio from "../asset/images/Portfolio.png";
import MiKrea from "../asset/images/MiKrea.png";
import Ro from "../asset/images/Ro.png";
import Rapideprime from "../asset/images/RapidePrime.png";

const Project = () => {
    return(
        <div className="projects" id="projects">
            <div className="text">
                <h1>My projects</h1>
                <div className="bar"></div>
            </div>
            <p>Drawing upon my experience and skills in development, I have successfully executed an innovative project, showcasing my ability to design and implement creative and effective solutions.</p>
            <div className="projets-contenu">
                <div className="projects-contents">
                    <div className="couverture-projects">
                        <img src={Rapideprime} alt="" />
                    </div>
                    <h4>RapidePrime</h4>
                    <p>Integration of Rapide Prime's website.</p>
                    <div className="description-techno">
                        <div className="techon">Next.Js</div>,
                        <div className="techon">Tailwindcss</div>,
                        <div className="techon">GSAP Animation</div>
                    </div>
                </div>
                <div className="projects-contents">
                    <div className="couverture-projects">
                        <img src={Portfolio} alt="" />
                    </div>
                    <h4>My Portfolio</h4>
                    <p>To showcase my projects and skills, demonstrating my creativity and ability to craft attractive interfaces.</p>
                    <div className="description-techno">
                        <div className="techon">React.Js</div>,
                        <div className="techon">GSAP Animation</div>
                    </div>
                </div>
                <div className="projects-contents">
                    <div className="couverture-projects">
                        <img src={MiKrea} alt="" />
                    </div>
                    <h4>Mi-Krea</h4>
                    <p>Integration of Mi-Krea's website.</p>
                    <div className="description-techno">
                        <div className="techon">Next.Js</div>,
                        <div className="techon">GSAP Animation</div>
                    </div>
                </div>
                <div className="projects-contents">
                    <div className="couverture-projects">
                        <img src={Ro} alt="" />
                    </div>
                    <div className="titre">
                        <h4>Critical Path Methode</h4>
                    </div>
                    <p>Developing a web application for task scheduling using the Critical Path Method (CPM)</p>
                    <div className="description-techno">
                        <div className="techon">React.Js</div>,
                        <div className="techon">Tailwindcss</div>,
                        <div className="techon">Reactflow</div>
                    </div>
                </div>
                <div className="projects-contents">
                    <div className="couverture-projects">
                        <img src={OneNote} alt="" />
                    </div>
                    <div className="titre">
                        <h4>One Note</h4>
                    </div>
                    <p>Creating a web platform for easy access to information, courses, and assignments, enhancing communication and education.</p>
                    <div className="description-techno">
                        <div className="techon">React.Js</div>,
                        <div className="techon">Node.Js</div>,
                        <div className="techon">Express.Js</div>,
                        <div className="techon">MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
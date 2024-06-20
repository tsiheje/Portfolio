import React from "react";
import OneNote from "../asset/images/OneNote.png";
import Portfolio from "../asset/images/Portfolio.png";
import MiKrea from "../asset/images/MiKrea.png";
import Ro from "../asset/images/Ro.png";
import Rapideprime from "../asset/images/RapidePrime.png";

const Project = () => {
    return (
        <div className="bg-gray-200 pt-10 md:pt-20 px-5 md:px-20 box-border flex flex-col gap-7" id="projects">
            <div className="flex items-center gap-5 w-full">
                <h1 className="text-2xl md:text-4xl font-bold">My Projects</h1>
                <div className="bar mt-1 w-20 md:w-40 h-1 bg-blue-900 rounded"></div>
            </div>
            <p className="font-sans">
                Drawing upon my experience and skills in development, I have successfully executed innovative projects, showcasing my ability to design and implement creative and effective solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
                <div className="w-full md:w-96 bg-white rounded-md border border-blue-300 shadow-md">
                    <div className="h-52 md:h-60 overflow-hidden rounded-t-xl">
                        <img src={Rapideprime} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-xl md:text-2xl font-semibold text-blue-900">RapidePrime</h4>
                    <p className="text-center">Integration of Rapide Prime's website.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-base md:text-lg">
                        <div>Next.Js</div>,
                        <div>Tailwindcss</div>,
                        <div>GSAP Animation</div>
                    </div>
                </div>
                <div className="w-full md:w-96 bg-white rounded-md border border-blue-300 shadow-md">
                    <div className="h-52 md:h-60 overflow-hidden rounded-t-xl">
                        <img src={Portfolio} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-xl md:text-2xl font-semibold text-blue-900">My Portfolio</h4>
                    <p className="text-center">To showcase my projects and skills, demonstrating my creativity and ability to craft attractive interfaces.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-base md:text-lg">
                        <div>React.Js</div>,
                        <div>GSAP Animation</div>
                    </div>
                </div>
                <div className="w-full md:w-96 bg-white rounded-md border border-blue-300 shadow-md">
                    <div className="h-52 md:h-60 overflow-hidden rounded-t-xl">
                        <img src={MiKrea} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-xl md:text-2xl font-semibold text-blue-900">Mi-Krea</h4>
                    <p className="text-center">Integration of Mi-Krea's website.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-base md:text-lg">
                        <div>Next.Js</div>,
                        <div>GSAP Animation</div>
                    </div>
                </div>
                <div className="w-full md:w-96 bg-white rounded-md border border-blue-300 shadow-md">
                    <div className="h-52 md:h-60 overflow-hidden rounded-t-xl">
                        <img src={Ro} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-xl md:text-2xl font-semibold text-blue-900">Critical Path Methode</h4>
                    <p className="text-center">Developing a web application for task scheduling using the Critical Path Method (CPM)</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-base md:text-lg">
                        <div>React.Js</div>,
                        <div>Tailwindcss</div>,
                        <div>Reactflow</div>
                    </div>
                </div>
                <div className="w-full md:w-96 bg-white rounded-md border border-blue-300 shadow-md">
                    <div className="h-52 md:h-60 overflow-hidden rounded-t-xl">
                        <img src={OneNote} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-xl md:text-2xl font-semibold text-blue-900">One Note</h4>
                    <p className="text-center">Creating a web platform for easy access to information, courses, and assignments, enhancing communication and education.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-base md:text-lg">
                        <div>React.Js</div>,
                        <div>Node.Js</div>,
                        <div>Express.Js</div>,
                        <div>MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;

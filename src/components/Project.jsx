import React from "react";
import OneNote from "../asset/images/OneNote.png";
import Portfolio from "../asset/images/Portfolio.png";
import MiKrea from "../asset/images/MiKrea.png";
import Ro from "../asset/images/Ro.png";
import Rapideprime from "../asset/images/RapidePrime.png";

const Project = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 pt-20 px-20 box-border gap-7" id="projects">
            <div className="flex items-center gap-5">
                <div className="bar mt-1 w-56 h-1 bg-blue-900 rounded"></div>
                <h1 className="text-4xl font-bold">My projects</h1>
            </div>
            <p className="font-sans text-lg text-center">
                Drawing upon my experience and skills in development, I have successfully executed an innovative project, showcasing my ability to design and implement creative and effective solutions.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-5">
                <div className="w-96 h-96 bg-white rounded-xl border border-blue-300">
                    <div className="h-3/5 overflow-hidden rounded-t-xl">
                        <img src={Rapideprime} alt="" className="w-full h-full object-cover  transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-2xl font-semibold text-blue-900">RapidePrime</h4>
                    <p className="text-center">Integration of Rapide Prime's website.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-lg">
                        <div className="">Next.Js</div>,
                        <div className="">Tailwindcss</div>,
                        <div className="">GSAP Animation</div>
                    </div>
                </div>
                <div className="w-96 h-96 bg-white rounded-xl border border-blue-900">
                    <div className="h-3/5 overflow-hidden rounded-t-xl">
                        <img src={Portfolio} alt="" className="w-full h-full object-cover  transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-2xl font-semibold text-blue-900">My Portfolio</h4>
                    <p className="text-center">To showcase my projects and skills, demonstrating my creativity and ability to craft attractive interfaces.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-lg">
                        <div className="">React.Js</div>,
                        <div className="">GSAP Animation</div>
                    </div>
                </div>
                <div className="w-96 h-96 bg-white rounded-xl border border-blue-900">
                    <div className="h-3/5 overflow-hidden rounded-t-xl">
                        <img src={MiKrea} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-2xl font-semibold text-blue-900">Mi-Krea</h4>
                    <p className="text-center">Integration of Mi-Krea's website.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-lg">
                        <div className="">Next.Js</div>,
                        <div className="">GSAP Animation</div>
                    </div>
                </div>
                <div className="w-96 h-96 bg-white rounded-xl border border-blue-900">
                    <div className="h-3/5 overflow-hidden rounded-t-xl">
                        <img src={Ro} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-2xl font-semibold text-blue-900">Critical Path Methode</h4>
                    <p className="text-center">Developing a web application for task scheduling using the Critical Path Method (CPM)</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-lg">
                        <div className="">React.Js</div>,
                        <div className="">Tailwindcss</div>,
                        <div className="">Reactflow</div>
                    </div>
                </div>
                <div className="w-96 h-96 bg-white rounded-xl border border-blue-900">
                    <div className="h-3/5 overflow-hidden rounded-t-xl">
                        <img src={OneNote} alt="" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                    </div>
                    <h4 className="mt-2 text-center text-2xl font-semibold text-blue-900">One Note</h4>
                    <p className="text-center">Creating a web platform for easy access to information, courses, and assignments, enhancing communication and education.</p>
                    <div className="flex items-center justify-center flex-wrap gap-1.5 font-thin text-lg">
                        <div className="">React.Js</div>,
                        <div className="">Node.Js</div>,
                        <div className="">Express.Js</div>,
                        <div className="">MySQL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;

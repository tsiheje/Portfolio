import React from "react";
import sary from "../asset/image 3.png";
import Down from "../asset/images/Down.png";
import cv from "../asset/Rasolofoniaina Tsiheje Marie Mickaelio.pdf";

const About = () => {
  return (
    <div className="w-full bg-gray-200 pt-24 px-5 md:px-20 box-border" id="about">
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-5 w-full">
        <div className="sary">
          <img src={sary} alt="" className="w-60 md:w-96 mx-auto" />
        </div>
        <div className="hidden md:flex items-center flex-col gap-5">
          <div className="w-1 h-56 bg-black rounded"></div>
          <div className="w-5 h-5 rounded-full border-4 border-black"></div>
          <div className="w-1 h-56 bg-black rounded"></div>
        </div>
        <div className="w-full md:w-3/5">
          <p className="font-light text-sm md:text-lg">
            As a full-stack developer and web integrator, I oversee all stages of development, from user interface design to database management. My mastery of React and back-end technologies like Node.js and Express enables me to create comprehensive and efficient solutions. I prioritize user experience and application performance.
          </p>
          <p className="font-light text-sm md:text-lg mt-4">
            My experience in web integration has allowed me to work on various projects, ensuring compatibility and responsiveness across different devices and browsers. I am always seeking new opportunities to apply and deepen my skills in full-stack development and web integration. I am prepared to tackle any challenge to deliver high-quality solutions that meet my clients' needs.
          </p>
          <p className="font-light text-sm md:text-lg mt-4">
            For more details about my background and skills, you can download my CV below.
          </p>
          <a href={cv} download className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-300 w-full md:w-1/4 text-center p-2.5 box-border rounded-md text-white text-sm md:text-lg mt-4">
            <p>Download CV</p>
            <img src={Down} alt=""/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

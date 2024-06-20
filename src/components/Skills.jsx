import React from "react";
import html from "../asset/images/Html.png";
import Js from "../asset/images/Js.png";
import Ai from "../asset/images/Ai.png";
import Ex from "../asset/images/Ex.png";
import Figma from "../asset/images/Figma.png";
import Git from "../asset/images/Git.png";
import Mysql from "../asset/images/Mysql.png";
import Ps from "../asset/images/Ps.png";
import Postgre from "../asset/images/Postgre.png";
import Node from "../asset/images/Node.png";
import Native from "../asset/images/Native.png";
import Tailwindcss from "../asset/images/Tailwind.png";
import PHP from "../asset/images/PHP.png";
import Next from "../asset/images/Next.png";
import Css from "../asset/images/Css.png";

const Skills = () => {
  return (
    <div className="bg-gray-200 pt-10 md:pt-20 px-5 md:px-20 box-border flex flex-col w-full gap-7" id="skills">
      <div className="flex items-center gap-5 text-center w-full">
        <h1 className="text-2xl md:text-4xl font-semibold">My Skills</h1>
        <div className="h-1 w-20 md:w-40 mt-1 bg-blue-900 rounded"></div>
      </div>
      <p className="font-sans">
        I have developed a strong expertise in React.js and Node.js, along with proficiency in other areas, enabling me to effectively contribute to innovative and high-quality projects.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col items-center gap-4 bg-white w-72 md:w-96 p-4 box-border rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-medium text-center text-blue-900">Web Technologies and Programming Languages</h3>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={html} alt="HTML" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">HTML</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Css} alt="CSS" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">CSS</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Js} alt="JavaScript" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">JavaScript</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={PHP} alt="PHP" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">PHP</h5>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 bg-white w-72 md:w-96 p-4 box-border rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-medium text-center text-blue-900">Frameworks and Libraries</h3>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Native} alt="React.Js" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">React.Js</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Next} alt="Next.Js" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Next.Js</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Node} alt="Node.Js" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Node.Js</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Ex} alt="Express.Js" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Express.Js</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Native} alt="React Native" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">React Native</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Tailwindcss} alt="Tailwindcss" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Tailwindcss</h5>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 bg-white w-72 md:w-96 p-4 box-border rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-medium text-center text-blue-900">Data Bases</h3>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Mysql} alt="MySQL" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">MySQL</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Postgre} alt="PostgreSQL" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">PostgreSQL</h5>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 bg-white w-72 md:w-96 p-4 box-border rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-medium text-center text-blue-900">Tools</h3>
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Ai} alt="Adobe Illustrator" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Adobe Illustrator</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Figma} alt="Figma" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Figma</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Ps} alt="Adobe Photoshop" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Adobe Photoshop</h5>
            </li>
            <li className="flex items-center gap-1.5 p-2 box-border rounded-lg hover:scale-105 hover:text-blue-900 hover:bg-white">
              <img src={Git} alt="Git" className="w-8 h-8 md:w-12 md:h-12" />
              <h5 className="text-base md:text-lg">Git</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

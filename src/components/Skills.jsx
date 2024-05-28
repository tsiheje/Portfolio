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
    <div className="skills" id="skills">
      <div className="text">`
        <div className="bar"></div>
        <h1>My Skills</h1>
      </div>
      <p>I have developed a strong expertise in React.js and Node.js, along with proficiency in other areas, enabling me to effectively contribute to innovative and high-quality projects.</p>
      <div className="skills-content">
        <div className="skills-content-description">
          <div className="description">
            <h3>Web Technologies and Programming Language</h3>
            <ul>
              <li>
                <img src={html} alt=""/>
                <h3>HTML</h3> 
              </li>
              <li>
                <img src={Css} alt="" />
                <h3>CSS</h3>
              </li>
              <li>
                <img src={Js} alt=""/> 
                <h3>JavaScript</h3>
              </li>
              <li>
                <img src={PHP} alt="" />
                <h3>PHP</h3>
              </li>
            </ul>
          </div>
          <div className="description">
              <h3>Frameworks and Libraries</h3>
              <ul>
                <li>
                  <img src={Native} alt=" "/>
                  <h3>React.Js</h3>
                </li>
                <li>
                  <img src={Next} alt="" />
                  <h3>Next.Js</h3>
                </li>
                <li>
                  <img src={Node} alt="" />
                  <h3>Node.Js</h3>
                </li>
                <li>
                  <img src={Ex} alt="" />
                  <h3>Express.Js</h3>
                </li>
                <li>
                  <img src={Native} alt=""/>
                  <h3>React Native</h3>
                </li>
                <li>
                  <img src={Tailwindcss} alt="" />
                  <h3>Tailwindcss</h3>
                </li>
              </ul>
          </div>
          <div className="description">
            <h3>Data Bases</h3>
            <ul>
              <li>
                <img src={Mysql} alt="" />
                <h3>MySQL</h3> 
              </li>
              <li>
                <img src={Postgre} alt="" />
                <h3>PostgreSQL</h3>
              </li>
            </ul>
          </div>
          <div className="description">
            <h3>Tools</h3>
            <ul>
              <li>
                <img src={Ai} alt="" />
                <h3>Adobe Illustrator</h3>
              </li>
              <li>
                <img src={Figma} alt="" />
                <h3>Figma</h3>
              </li>
              <li>
                <img src={Ps} alt="" />
                <h3>Adobe Photoshop</h3>
              </li>
              <li>
                <img src={Git} alt="" />
                <h3>Git</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
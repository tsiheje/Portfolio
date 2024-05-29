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
                <h5>HTML</h5> 
              </li>
              <li>
                <img src={Css} alt="" />
                <h5>CSS</h5>
              </li>
              <li>
                <img src={Js} alt=""/> 
                <h5>JavaScript</h5>
              </li>
              <li>
                <img src={PHP} alt="" />
                <h5>PHP</h5>
              </li>
            </ul>
          </div>
          <div className="description">
              <h3>Frameworks and Libraries</h3>
              <ul>
                <li>
                  <img src={Native} alt=" "/>
                  <h5>React.Js</h5>
                </li>
                <li>
                  <img src={Next} alt="" />
                  <h5>Next.Js</h5>
                </li>
                <li>
                  <img src={Node} alt="" />
                  <h5>Node.Js</h5>
                </li>
                <li>
                  <img src={Ex} alt="" />
                  <h5>Express.Js</h5>
                </li>
                <li>
                  <img src={Native} alt=""/>
                  <h5>React Native</h5>
                </li>
                <li>
                  <img src={Tailwindcss} alt="" />
                  <h5>Tailwindcss</h5>
                </li>
              </ul>
          </div>
          <div className="description">
            <h3>Data Bases</h3>
            <ul>
              <li>
                <img src={Mysql} alt="" />
                <h5>MySQL</h5> 
              </li>
              <li>
                <img src={Postgre} alt="" />
                <h5>PostgreSQL</h5>
              </li>
            </ul>
          </div>
          <div className="description">
            <h3>Tools</h3>
            <ul>
              <li>
                <img src={Ai} alt="" />
                <h5>Adobe Illustrator</h5>
              </li>
              <li>
                <img src={Figma} alt="" />
                <h5>Figma</h5>
              </li>
              <li>
                <img src={Ps} alt="" />
                <h5>Adobe Photoshop</h5>
              </li>
              <li>
                <img src={Git} alt="" />
                <h5>Git</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
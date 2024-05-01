import React from "react";
import framework from "../asset/images/framework.png";
import tools from "../asset/images/tools.png";
import Systeme from "../asset/images/systeme.png";
import devops from "../asset/images/devops.png";
import coding from "../asset/images/coding.png";
import reseaux from "../asset/images/reseaux1.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="text">
        <div className="bar"></div>
        <h1>My Skills</h1>
      </div>
      <div className="skills-content">
        {/* <h2 className="dev">Web and Mobile Developer</h2> */}
        <div className="skills-content-description">
          <div className="description">
            <img src={coding} alt="" width={150}/>
            <ul>
              <h3>Web Technologies and Programming Language</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="description">
            <img src={framework} alt="" width={150}/>
            <div>
              <ul>
                <h3>Frameworks and Libraries</h3>
                <li>React</li>
                <li>React Native</li>
                <li>Express</li>
                <li>NodeJs</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
          <div className="description">
            <img src={tools} alt="" width={150}/>
            <ul>
              <h3>Tools</h3>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        <div className="skills-content-description">
          <div className="description">
            <img src={reseaux} alt="" width={150}/>
            <ul>
              <h3>Network Administrator</h3>
              <li>Knowledge of TCP/IP network</li>
              <li>Functioning of LAN and WAN networks</li>
              <li>Computer Routing</li>
              <li>Computer Network Security</li>
            </ul>
          </div>
          <div className="description">
            <img src={Systeme} alt="" width={150}/>
            <ul>
              <h3>System Administrator</h3>
              <li>Windows System Administration</li>
              <li>Linux System Administration</li>
              <li>Supervision of Computer Parks</li>
              <li>Virtualization of Computer Systems</li>
            </ul>
          </div>
          <div className="description">
            <img src={devops} alt="" width={150}/>
            <ul>
              <h3>DevOps Engineer</h3>
              <li>DevOps Methodology</li>
              <li>Cloud Computing</li>
              <li>Automation</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
        {/* <h2>System and Network Administrator / DevOps Engineer</h2> */}
      </div>
    </div>
  );
};

export default Skills;
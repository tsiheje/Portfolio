import React from "react";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>My Skills</h1>
      <div className="skills-content">
        <div className="developer">
          <h1>Web and Mobile Developer</h1>
          <div className="Technology">
            <h2>Web Technologies and Programming Language</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="User-interface">
            <h2>Frameworks and Libraries</h2>
            <ul>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>ExpressJS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div className="Dev-tools">
            <h2>Tools</h2>
            <ul>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        <div className="Admin">
          <h1>System and Network Administrator / DevOps Engineer</h1>
          <div className="Network">
            <h2>Network Administrator</h2>
            <ul>
              <li>Knowledge of TCP/IP network</li>
              <li>Functioning of LAN and WAN networks</li>
              <li>Computer Routing</li>
              <li>Computer Network Security</li>
            </ul>
          </div>
          <div className="System">
            <h2>System Administrator</h2>
            <ul>
              <li>Windows System Administration</li>
              <li>Linux System Administration</li>
              <li>Supervision of Computer Parks</li>
              <li>Virtualization of Computer Systems</li>
            </ul>
          </div>
          <div className="DevOps">
            <h2>DevOps Engineer</h2>
            <ul>
              <li>DevOps Methodology</li>
              <li>Cloud Computing</li>
              <li>Automation</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
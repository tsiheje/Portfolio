import React, { useState } from "react";
import Github from "../asset/github (2).png";
import facebook from "../asset/facebook (2).png";
import linkedin from "../asset/linkedin (2).png";
import Menu from "../asset/images/Menu.png";

const BarNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-4 md:px-20 py-3 box-border z-20 bg-gray-200 bg-opacity-80">
      <div className="text-2xl md:text-5xl font-bold">
        Mickaelio<span className="text-blue-900">.</span>
      </div>
      <div className={`md:flex items-center justify-between w-2/3 mt-4 md:mt-0 ${isOpen ? "flex flex-col md:flex-row" : "hidden"}`}>
        <div className="md:flex md:flex-row md:gap-6 md:items-center">
          <a href="#home" className="text-lg md:text-xl font-sans text-black hover:text-blue-800">
            Home
          </a>
          <a href="#about" className="text-lg md:text-xl font-sans text-black hover:text-blue-800">
            About
          </a>
          <a href="#skills" className="text-lg md:text-xl font-sans text-black hover:text-blue-800">
            Skills
          </a>
          <a href="#projects" className="text-lg md:text-xl font-sans text-black hover:text-blue-800">
            Projects
          </a>
          <a href="#contact" className="text-lg md:text-xl font-sans text-black hover:text-blue-800">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <a href="https://www.facebook.com/Rasolofoniaina.Mickaelio/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" width={32} className="hover:opacity-70 transition-opacity duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rasolofoniaina-tsiheje-marie-mickaelio3/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" width={32} className="hover:opacity-70 transition-opacity duration-300" />
          </a>
          <a href="https://github.com/tsiheje" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" width={32} className="hover:opacity-70 transition-opacity duration-300" />
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <img src={Menu} alt="Menu" width={32} onClick={toggleMenu} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default BarNav;

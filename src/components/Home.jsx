import React from "react";
import sary from "../asset/image-3.webp";
import fleche from "../asset/fleche.png";

const Home = () => {
  return (
    <div className="flex items-center justify-between flex-wrap px-5 md:px-20 box-border h-screen bg-gray-200" id="home">
      <div className="description w-full md:w-1/2">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-6xl">Hello,</h2>
          <h1 className="text-4xl md:text-6xl relative">
            I'm 
            <span 
              data-text="Mickaelio" 
              className="relative text-[50px] md:text-[90px] text-gray-200"
              style={{ WebkitTextStroke: "0.1vw rgb(0, 72, 226)" }}
            >
              Mickaelio
              <span className="absolute top-0 left-0 w-0 h-full text-blue-700 overflow-hidden animate-[animate_6s_linear_infinite] before:content-[attr(data-text)]" />
            </span>
          </h1>
          <p className="text-xl md:text-4xl pb-5 font-sans">
            Welcome to my personal website!👋
          </p>
          <a 
            href="#about" 
            className="flex items-center text-white bg-gradient-to-r from-blue-500 to-blue-300 p-2.5 box-border rounded-md text-lg md:text-2xl text-center w-full md:w-1/2 font-sans gap-2"
          >
            Learn more about me
            <img src={fleche} alt=""/>
          </a>
        </div>
      </div>
      <div className="sary hidden md:block w-full md:w-1/2 mt-10 md:mt-0">
        <div className="font">
          <img src={sary} alt="" width={400} className="mx-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Home;

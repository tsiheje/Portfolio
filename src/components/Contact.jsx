import React from "react";
import Phone from "../asset/images/icons8-téléphone-50.png";
import Mail from "../asset/images/icons8-courrier-48.png";
import Adress from "../asset/images/icons8-épingle-64.png";

const Contact = () => {
    return (
        <div className="bg-gray-200 pt-24 px-5 md:px-20 pb-10 box-border flex flex-col items-center justify-center gap-10" id="contact">
            <div className="w-full md:w-5/6 border-[10px] border-blue-900">
                <div className="p-7 md:p-14 box-border bg-blue-900 text-center relative left-0 top-0 transition-all duration-1000 cursor-pointer hover:left-7 hover:top-7">
                    <p className="text-white text-lg md:text-2xl font-semibold">
                        Feel free to contact me to discuss your projects and explore how I can help you achieve your goals with enthusiasm, expertise, and unwavering commitment.
                    </p>
                    <span className="absolute top-0 left-0 text-white text-4xl md:text-7xl" style={{transform: 'translateY(-31%)'}}>🙶</span>
                    <span className="absolute bottom-0 right-0 text-white text-4xl md:text-7xl" style={{transform: 'translateY(61%)'}}>🙷</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-11/12 gap-10">
                <div className="flex flex-col gap-5 w-full md:w-1/2">
                    <h1 className="font-bold text-2xl md:text-3xl">Contact Me</h1>
                    <p className="font-light text-base md:text-lg">
                        Feel free to send me an email or reach out to me to discuss your projects or for any inquiries. I'm always available and eager to collaborate in finding the best solutions tailored to your needs.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <img src={Mail} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                            <p className="text-base md:text-lg">tsihejem@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={Phone} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                            <p className="text-base md:text-lg">+261342341566</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={Adress} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                            <p className="text-base md:text-lg">Madagascar</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 w-full md:w-1/2">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-1">
                            <input type="text" placeholder="First Name" className="w-full p-2 text-base md:text-lg border border-blue-600 rounded" />
                            <input type="text" placeholder="Last Name" className="w-full p-2 text-base md:text-lg border border-blue-600 rounded" />
                        </div>
                        <div className="flex gap-1">
                            <input type="email" placeholder="Email" className="w-full p-2 text-base md:text-lg border border-blue-600 rounded" />
                            <input type="text" placeholder="Subject" className="w-full p-2 text-base md:text-lg border border-blue-600 rounded" />
                        </div>
                        <textarea cols="10" rows="5" placeholder="Your message..." className="w-full p-2 text-base md:text-lg border border-blue-600 rounded"></textarea>
                        <button className="w-full p-2 text-lg md:text-2xl text-white bg-blue-600 border-none rounded hover:bg-blue-700 transition-colors duration-300">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

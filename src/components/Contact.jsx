import React from "react";
import Phone from "../asset/images/icons8-téléphone-50.png";
import Mail from "../asset/images/icons8-courrier-48.png";
import Adress from "../asset/images/icons8-épingle-64.png";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 pt-24 px-20 pb-5 box-border gap-20" id="contact">
            <div className="w-5/6 border-[10px] border-blue-900">
                <div className="p-14 box-border bg-blue-900 text-center relative left-7 top-7 transition-all duration-1000 cursor-pointer hover:left-0 hover:top-0">
                    <p className="text-white text-2xl font-semibold">
                        Feel free to contact me to discuss your projects and explore how I can help you achieve your goals with enthusiasm, expertise, and unwavering commitment.
                    </p>
                    <span className="absolute top-0 left-0 text-white text-7xl" style={{transform: 'translateY(-31%)'}}>🙶</span>
                    <span className="absolute bottom-0 right-0 text-white text-7xl" style={{transform: 'translateY(61%)'}}>🙷</span>
                </div>
            </div>
            <div className="flex items-center flex-wrap w-11/12">
                <div className="flex flex-col gap-3.5 w-1/2">
                    <h1 className="font-bold text-3xl">Contact Me</h1>
                    <p className="font-light text-lg">
                        Feel free to send me an email or reach out to me to discuss your projects or for any inquiries. I'm always available and eager to collaborate in finding the best solutions tailored to your needs.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1.5">
                            <img src={Mail} alt="" width={30} />
                            <p>tsihejem@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <img src={Phone} alt="" width={30} />
                            <p>+261342341566</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <img src={Adress} alt="" width={30} />
                            <p>Madagascar</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 w-1/2">
                    <div className="flex gap-1 w-full">
                        <input type="text" placeholder="FirstName" className="w-full p-2 box-border text-base border border-blue-600 rounded" />
                        <input type="text" placeholder="Name" className="w-full p-2 box-border text-base border border-blue-600 rounded" />
                    </div>
                    <div className="flex gap-1 w-full">
                        <input type="email" placeholder="Email" className="w-full p-2 box-border text-base border border-blue-600 rounded" />
                        <input type="text" placeholder="Object" className="w-full p-2 box-border text-base border border-blue-600 rounded" />
                    </div>
                    <textarea cols="10" rows="10" placeholder="Your message..." className="w-full p-2 box-border text-base border border-blue-600 rounded"></textarea>
                    <button className="w-full p-2 text-2xl text-white bg-blue-600 border-none rounded">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;

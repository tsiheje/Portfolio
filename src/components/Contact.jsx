import React from "react";
import Phone from "../asset/images/icons8-téléphone-50.png";
import Mail from "../asset/images/icons8-courrier-48.png";
import Adress from "../asset/images/icons8-épingle-64.png";

const Conctact = () => {
    return(
        <div className="contact" id="contact">
            <div className="citation">
                <div className="citation-description">
                    <p>Feel free to contact me to discuss your projects and explore how I can help you achieve your goals with enthusiasm, expertise, and unwavering commitment.</p>
                </div>
            </div>
            <div className="contact-apropos">
                <div className="contact-apropo">
                    <h1>Contact Me</h1>
                    <p>Feel free to send me an email or reach out to me to discuss your projects or for any inquiries. I'm always available and eager to collaborate in finding the best solutions tailored to your needs.</p>
                    <div className="phone-number">
                        <div className="phone-mail">
                            <img src={Mail} alt="" width={30}/>
                            <p>tsihejem@gmail.com</p>
                        </div>
                        <div className="phone-mail">
                            <img src={Phone} alt="" width={30}/>
                            <p>+261342341566</p>
                        </div>
                        <div className="phone-mail">
                            <img src={Adress} alt="" width={30}/>
                            <p>Madagascar</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="name">
                        <input type="text" name="" id="" placeholder="FirstName"/>
                        <input type="text" name="" id="" placeholder="Name"/>
                    </div>
                    <div className="mail">
                        <input type="email" name="" id="" placeholder="Email"/>
                        <input type="text" name="" id="" placeholder="Object"/>
                    </div>
                    <textarea name="" id="" cols="10" rows="10" placeholder="Your message..."></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Conctact;
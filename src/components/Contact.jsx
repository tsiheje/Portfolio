import React from "react";

const Conctact = () => {
    return(
        <div className="contact" id="contact">
            <div className="citation">
                <div className="citation-description">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, harum! Sit error excepturi provident ea commodi praesentium est perspiciatis aperiam veritatis enim. Reiciendis consectetur explicabo numquam ipsa, natus ab cupiditate.</p>
                </div>
            </div>
            <div className="contact-apropos">
                <div className="contact-apropo">
                    <h1>Contact-me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus, asperiores repudiandae illo soluta nemo fugiat nesciunt. Excepturi expedita esse nesciunt corporis. Consectetur eveniet quas ipsam quae quos asperiores impedit?</p>
                </div>
                <div className="contact-form">
                    <input type="email" name="" id="" placeholder="Email"/>
                    <input type="text" name="" id="" placeholder="Object"/>
                    <textarea name="" id="" cols="10" rows="10" placeholder="Your message..."></textarea>
                    <button>Send</button>
                </div>
            </div>
            <div className="phone-number">
                <p>Email : tsihejem@gmail.com</p>
                <p>Phone : +261342341566</p>
            </div>
        </div>
    )
}

export default Conctact;
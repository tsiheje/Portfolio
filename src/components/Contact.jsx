import React from "react";

const Conctact = () => {
    return(
        <div className="contact" id="contact">
            <div className="contact-apropo">
                <h1>Contact</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet veritatis labore voluptatem repellendus, saepe ea ex iure voluptate quo obcaecati, sequi harum. Recusandae tenetur consequuntur, quia nam magni id soluta!</p>
            </div>
            <div className="contact-form">
                <input type="email" name="" id="" placeholder="Email"/>
                <input type="text" name="" id="" placeholder="Objet"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Votre message..."></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Conctact;
import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-layout">
      <h7 className="title-text">Bachelor of Science Program, Computer Science.</h7>
      <div className="contact-profile">
        <div className="profile one">
          <img src={require("../assets/img/About/jame.jpg")} />
          <div className="bg-text">
            <p className="text">Sutthiphong Kannikaklang</p>
            {/* <p>jame.kannikaklang@gmail.com</p> */}
          </div>
        </div>
        <div className="profile two">
          <img src={require("../assets/img/About/mook.jpg")} />
          <div className="bg-text">
            <p className="text">Prathana Khuankhwawong</p>
            {/* <p>prathana.khuan2000@gmail.com</p> */}
          </div>
        </div>
        <div className="profile three">
          <img src={require("../assets/img/About/khim.jpg")} />
          <div className="bg-text">
            <p className="text">Natnaree Dangsakul</p>
            {/* <p>knatnareennr@gmail.com</p> */}
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-title">
          <h3>Contact Us</h3>
        </div>
        <div className="about-text">

        </div>
      </div>
    </div>
  );
}

export default Contact;

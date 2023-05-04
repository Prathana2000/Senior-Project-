import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-layout">
      <div className="contact-profile">
        <div className="profile one">
          <img src={require("../assets/img/About/jame.jpg")} />
          <div className="bg-text">
            <p className="text">นายสุทธิพงศ์ กรรณิกากลาง</p>
            <p>jame.kannikaklang@gmail.com</p>
          </div>
        </div>
        <div className="profile two">
          <img src={require("../assets/img/About/mook.jpg")} />
          <div className="bg-text">
            <p className="text">นางสาวปรารถนา เขื่อนขวาวงศ์</p>
            <p>prathana.khuan2000@gmail.com</p>
          </div>
        </div>
        <div className="profile three">
          <img src={require("../assets/img/About/khim.jpg")} />
          <div className="bg-text">
            <p className="text">นางสาวณัฐนรี แดงสกุล</p>
            <p>knatnareennr@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="about">

      </div>
    </div>
  );
}

export default Contact;

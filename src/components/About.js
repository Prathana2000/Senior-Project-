import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about-layout">
      <div className="profile one">
        <img src={require("../assets/img/About/jame.jpg")} />
        <p>นายสุทธิพงศ์ กรรณิกากลาง</p>
        <p>jame.kannikaklang@gmail.com</p>
      </div>
      <div className="profile two">
        <img src={require("../assets/img/About/jame.jpg")} />
        <p>นางสาวปรารถนา เขื่อนขวาวงศ์</p>
        <p>prathana.khuan2000@gmail.com</p>
      </div>
      <div className="profile three">
        <img src={require("../assets/img/About/khim.jpg")} />
        <p>นางสาวณัฐนรี แดงสกุล</p>
        <p>knatnareennr@gmail.com</p>
      </div>
    </div>
  );
}

export default About;

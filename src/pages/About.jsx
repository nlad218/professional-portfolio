import headshot from "../assets/headshot/headshot.jpeg";
import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="headshot-container">
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
      <div className="bio">
        <p>
          I'm a dedicated Full Stack Developer with a passion for crafting
          innovative, user-centric web solutions. My versatile skill set spans
          front-end and back-end technologies, allowing me to create elegant and
          efficient applications that surpass expectations. In dynamic,
          collaborative environments, I thrive on solving complex challenges and
          staying at the forefront of industry trends. My unwavering commitment
          to excellence, coupled with a genuine love for problem-solving,
          defines my approach to web development. Each line of code I write and
          project I undertake is a testament to my dedication to delivering
          exceptional user experiences. I'm excited to contribute my expertise
          to future projects and push boundaries in the ever-evolving tech
          landscape.
        </p>
      </div>
    </div>
  );
}

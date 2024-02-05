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
          A dedicated Full Stack Developer with a passion for crafting
          innovative, user-centric web solutions, possessing a versatile skill
          set that spans front-end and back-end technologies. Specialized in
          creating elegant and efficient applications that surpass expectations,
          particularly in dynamic, collaborative environments. Thrives on
          solving complex challenges and staying at the forefront of industry
          trends, maintaining an unwavering commitment to excellence and a
          genuine love for problem-solving. Each line of code written and
          project undertaken is a testament to the dedication to delivering
          exceptional user experiences. Excited to contribute expertise to
          future projects and push boundaries in the ever-evolving tech
          landscape.
        </p>
      </div>
    </div>
  );
}

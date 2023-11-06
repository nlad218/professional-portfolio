import React, { useState } from "react";
import PDF from "../assets/NDeignanResume.pdf";

export default function Resume() {
  const [showPDF, setShowPDF] = useState(true);

  const handleClick = () => {
    setShowPDF(!showPDF);
  };
  return (
    <>
      <div className="pb-2">
        <h3>Resume</h3>
        <h6>
          Print or download my{" "}
          <a href="#resumePDF" onClick={handleClick}>
            resume
          </a>
        </h6>
      </div>
      {showPDF ? (
        <div className="resume">
          <ul className="skills">
            Front-end Proficiencies
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
          </ul>
          <ul className="skills">
            Back-end Proficiencies
            <li>APIs</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      ) : (
        <div className="w-100">
          <object
            aria-label="pdf resume"
            width="100%"
            height="800"
            data={PDF}
            type="application/pdf"
          />
        </div>
      )}
    </>
  );
}

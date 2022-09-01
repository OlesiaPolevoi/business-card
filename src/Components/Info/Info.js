import React from "react";
import photo from "./photo.jpg";
import mailIcon from "./Mail.png";
import linkedinIcon from "./LinkedinIcon.png";
import "./Info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={photo} />
      <h1 className="Info--name">Olesia Polevoi</h1>
      <h3 className="Info--title">Frontend Developer</h3>
      <p className="Info--website">olesiapolevoi.com</p>
      <div className="Info--buttons">
        <button className="Info--button-mail">
          <img src={mailIcon} />
          <div>Email</div>
        </button>
        <button className="Info--button-linkedin">
          <img src={linkedinIcon} />
          <div>LinkedIn</div>
        </button>
      </div>
    </div>
  );
}

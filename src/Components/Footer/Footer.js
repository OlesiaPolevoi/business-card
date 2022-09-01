import React from "react";
import GitHubIcon from "./GitHubIcon.png";
import InstagramIcon from "./InstagramIcon.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={GitHubIcon} />
      <img src={InstagramIcon} />
    </div>
  );
}

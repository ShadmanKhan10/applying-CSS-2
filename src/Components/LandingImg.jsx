import React from "react";
import "./LandingImg.css";
import Profile from "../assets/Profile.png";
import Heading from "../assets/Heading.png";

export default function LandingImg() {
  return (
    <div>
      <div className="profile-container">
        <img src={Profile} alt="profile" className="profile" />
      </div>
      <div className="btn-container">
        <button className="btn" type="submit">
          START
        </button>
      </div>
      <div className="heading-container">
        <img src={Heading} alt="heading-text" className="heading" />
      </div>
    </div>
  );
}

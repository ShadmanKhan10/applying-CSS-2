import React from "react";
import "./Background.css";
import Bg from "../assets/Bg.png";

export default function Background() {
  return (
    <div>
      <img src={Bg} alt="background" className="background-image" />
    </div>
  );
}

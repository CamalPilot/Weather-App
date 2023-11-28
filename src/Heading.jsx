import React from "react";
import img from "./assets/Group 48.svg"
// import logo from "./assets/Hotlify.svg"
import "./Heading.css"

const Heading = () => {
  return (
    <div className="heading">
      <img className="icon" src={img} alt="icon" />
      <h1 className="title">Hotlify</h1>
    </div>
  );
};

export default Heading;

import React from "react";
import "./Card.css";
import condition from "./assets/thunderstorm.svg";

const Card = ({cityName, temperature, image, newHistory}) => {
  if(!cityName || !temperature){
    return null;
  }
  return (
    <div className="cards">
      {
        newHistory.map((item, i) => (
      <div className="card" key={i}>
        <span className="city">{item.name}</span>
        <img src={item.image} alt="" />
        <span className="temperature">{Math.round(item.celcius - 273.15)}°</span>
      </div>
        )
        )
      }
    </div>
  );
};

export default Card;

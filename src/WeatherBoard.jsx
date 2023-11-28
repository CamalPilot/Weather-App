import React, { useState } from "react";
import "./WeatherBoard.css";
import location from "./assets/location.svg";
import temperature from "./assets/temperature.svg";
import { format } from "date-fns";

const WeatherBoard = ({ celcius, name, humidity, speed, image, unit}) => {
  const dateString = format(new Date(), "LLLL do,  EEEE");
  const kelvinToCelcius = Math.round(celcius - 273.15);


  const convertTemperature = (cel) => {
    if (unit === "fahrenheit") {
      return `${(cel * 9) / 5 + 32} °F`
    }
    return `${cel} °C`
  };

  return (
    <div className="board container-board">
      <div className="board__heading">
        <div className="place">
          <span>{name}</span>
          <img src={location} alt="location" />
        </div>
        <div className="date">
          <span>{dateString}</span>
        </div>
      </div>
      <div className="board__center">
        <img src={temperature} alt="" />
        <span>{convertTemperature(kelvinToCelcius)}</span>
        <img className="condition" src={image} alt="" />
      </div>
      <div className="board__bottom">
        <div className="humidity">
          <span>Humidity</span>
          <span className="humidty__value">{Math.round(humidity)}%</span>
        </div>
        <div className="wind">
          <span>Wind</span>
          <span className="wind__value">{Math.round(speed)}mph</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherBoard;

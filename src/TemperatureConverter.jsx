import React, { useState } from 'react';
import "./TemperatureConverter.css"

function TemperatureConverter({handleUnitToggle}) {

  return (
    <div className="toggle">
      <span>°C</span>
      <label className="switch">
        <input type="checkbox" onChange={handleUnitToggle} />
        <span className="slider round"></span>
      </label>
      <span>°F</span>
    </div>
  );
}

export default TemperatureConverter;

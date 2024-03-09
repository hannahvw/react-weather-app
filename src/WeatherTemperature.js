import React from "react";

export default function WeatherTemperature(props) {
  let temperature = Math.round(props.temp);
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{temperature}</span>
        <span className="unit">°F
        </span>
      </div>
    );
}

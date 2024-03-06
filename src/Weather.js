import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row">
        <div className="col-9">
          <input
            type="text"
            placeholder="Enter a city"
            autoFocus="on"
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-info w-100">Search</button>
        </div>
      </form>
      <h1>Chicago</h1>
      <ul>
        <li>Wednesday 10:45</li>
        <li>Mostly Clear</li>
      </ul>
      <div className="row current-weather">
        <div className="col-6">
          <div className="current-temp">
            <img
              src="https://duckduckgo.com/assets/weather/icons/weatherkit/MostlyClear.svg"
              alt="Mostly Clear"
            />
            <span className="temperature">32</span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 71%</li>
            <li>Wind: 6 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Sat</div>
            <img
              className="WeatherForecast-icon"
              src="https://duckduckgo.com/assets/weather/icons/weatherkit/MostlyCloudy.svg"
              alt=""
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-max">44°</span>
              <span className="WeatherForecast-min">32°</span>
            </div>
        </div>
      </div>
      </div>
    );
}
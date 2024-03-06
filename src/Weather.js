import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconUrl:
        "https://duckduckgo.com/assets/weather/icons/weatherkit/MostlyClear.svg",
      date: "Wednesday 10:45",
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row current-weather">
          <div className="col-6">
            <div className="current-temp">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `2cacbf3044aeb9a87b5a33at06fco72a`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>loading...</div>;
  }
}

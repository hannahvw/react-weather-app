import React from "react";

export default function WeatherForecastDay(props) {
function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`
}
function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
}

function day() {
    let date = new Date(props.data.time * 1000);
    let days = [
       "Sun",
       "Mon",
       "Tue",
       "Wed",
       "Thu",
       "Fri",
       "Sat",
     ];
     let day = date.getDay();
     
    return days[day];
}
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        className="WeatherForecast-icon"
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}

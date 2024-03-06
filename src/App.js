import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tampa" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/hannahvw/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Hannah Van Wyk
            </a>{" "}
            and is open-sourced on GitHub.
          </p>
        </footer>
      </div>
    </div>
  );
}

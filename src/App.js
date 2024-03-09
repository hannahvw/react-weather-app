import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          <p>
            This project was coded by Hannah Van Wyk and is open-sourced on{" "}
            <a
              href="https://github.com/hannahvw/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://heroic-treacle-ce8911.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

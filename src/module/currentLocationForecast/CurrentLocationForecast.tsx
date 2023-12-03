import React from "react";
import "./CurrentLocationForecast.scss";

const sunny = require("../../../public/assets/images/sunny.png");

const CurrentLocationForecast = () => {
  return (
    <>
      <div>
        <p className="title">10-day Forecast</p>
        <div className="forecast-container">
          <div className="row-content">
            <p className="content-text">Today</p>
            <section className="weather-column">
              <img src={sunny} alt="" className="forecast-img" />
              <p className="content-text">Sunny</p>
            </section>
            <p className="content-text">23/32</p>
          </div>
          <div className="row-content">
            <p className="content-text">Tomorrow</p>
            <section className="weather-column">
              <img src={sunny} alt="" className="forecast-img" />
              <p className="content-text">Sunny</p>
            </section>
            <p className="content-text">23/32</p>
          </div>
          <div className="row-content">
            <p className="content-text">Tuesday</p>
            <section className="weather-column">
              <img src={sunny} alt="" className="forecast-img" />
              <p className="content-text">Sunny</p>
            </section>
            <p className="content-text">23/32</p>
          </div>
          <div className="row-content">
            <p className="content-text">Wednesday</p>
            <section className="weather-column">
              <img src={sunny} alt="" className="forecast-img" />
              <p className="content-text">Sunny</p>
            </section>
            <p className="content-text">23/32</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentLocationForecast;

import React from "react";
import "./CurrentConditions.scss";
import CurrentLocationForecast from "../../currentLocationForecast/CurrentLocationForecast";

const sunny = require("../../../../public/assets/images/sunny.png");

const CurrentConditions = () => {
  return (
    <>
      <div className="summary-container">
        <div className="current-conditions">
          <h2>Singapore</h2>
          <p className="description">Chance of rain: 0%</p>
          <h1>28°</h1>
        </div>
        <img src={sunny} alt="" className="summary-image" />
      </div>
      <div className="today-forecast">
        <p className="description">Today's forecast</p>
        <div className="today-forecast-section">
          <section>
            <p className="description">6.00pm</p>
            <img src={sunny} alt="" className="forecast-img" />
          </section>
          <section>
            <p className="description">9.00pm</p>
            <img src={sunny} alt="" className="forecast-img" />
          </section>
          <section>
            <p className="description">12.00am</p>
            <img src={sunny} alt="" className="forecast-img" />
          </section>
        </div>
      </div>
      <CurrentLocationForecast />
    </>
  );
};
export default CurrentConditions;

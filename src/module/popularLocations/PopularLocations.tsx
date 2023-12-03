import React from "react";
import { Button, Card } from "react-bootstrap";
import "./PopularLocations.scss";

const sunset = require("../../../public/assets/images/sunset.png");
const windy = require("../../../public/assets/images/windy.png");

const PopularLocations = () => {
  return (
    <>
      <p className="section-header">Popular Locations</p>
      <div className="card-container">
        <div className="card-content">
          <img src={sunset} alt="" className="card-img" />
          <h3>Singapore</h3>
          <p>28°</p>
          <Button className="button" variant="success">
            Add
          </Button>
        </div>
      </div>
    </>
  );
};
export default PopularLocations;

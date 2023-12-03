import React from "react";
import "./SavedLocations.scss";
import { Button } from "react-bootstrap";
const sunny = require("../../../public/assets/images/sunny.png");
const storm = require("../../../public/assets/images/storm.png");
const cloudy = require("../../../public/assets/images/cloudy.png");

const SavedLocations = () => {
  return (
    <>
      <p className="section-header">Saved Locations</p>
      <div className="card-container">
        <div className="card-content">
          <img src={sunny} alt="" className="card-img" />
          <h3>Singapore</h3>
          <p>28°</p>
          <Button className="button" variant="danger">
            Delete
          </Button>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="card-img" />
          <h3>Kuala Lumpur</h3>
          <p>28°</p>
          <Button className="button" variant="danger">
            Delete
          </Button>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="card-img" />
          <h3>Kuala Lumpur</h3>
          <p>28°</p>
          <Button className="button" variant="danger">
            Delete
          </Button>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="card-img" />
          <h3>Kuala Lumpur</h3>
          <p>28°</p>
          <Button className="button" variant="danger">
            Delete
          </Button>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="card-img" />
          <h3>Kuala Lumpur</h3>
          <p>28°</p>
          <Button className="button" variant="danger">
            Delete
          </Button>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="card-img" />
          <h3>Kuala Lumpur</h3>
          <p>28°</p>
          <Button className="button" variant="danger">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};
export default SavedLocations;

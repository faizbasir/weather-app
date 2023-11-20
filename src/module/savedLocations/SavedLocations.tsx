import React from "react";
import "./SavedLocations.scss";
import { Card, CardGroup } from "react-bootstrap";
const sunny = require("../../../public/assets/images/sunny.png");
const storm = require("../../../public/assets/images/storm.png");
const cloudy = require("../../../public/assets/images/cloudy.png");

const SavedLocations = () => {
  return (
    <>
      <p className="section-header">Saved Locations</p>
      <div className="card-container">
        <Card
          style={{
            width: "20%",
            backgroundColor: "rgb(37, 28, 51)",
            color: "white",
            marginRight: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <Card.Img variant="top" src={cloudy} className="card-img" />
          <Card.Body>
            <Card.Title>Kuala Lumpur</Card.Title>
            <Card.Text>28°</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20%",
            backgroundColor: "rgb(37, 28, 51)",
            color: "white",
            marginRight: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <Card.Img variant="top" src={storm} className="card-img" />
          <Card.Body>
            <Card.Title>Bangkok</Card.Title>
            <Card.Text>23°</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20%",
            backgroundColor: "rgb(37, 28, 51)",
            color: "white",
            marginRight: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <Card.Img variant="top" src={sunny} className="card-img" />
          <Card.Body>
            <Card.Title>Australia</Card.Title>
            <Card.Text>26°</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "20%",
            backgroundColor: "rgb(37, 28, 51)",
            color: "white",
            marginRight: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <Card.Img variant="top" src={sunny} className="card-img" />
          <Card.Body>
            <Card.Title>Singapore</Card.Title>
            <Card.Text>33°</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default SavedLocations;

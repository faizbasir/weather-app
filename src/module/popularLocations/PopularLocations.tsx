import React from "react";
import { Card } from "react-bootstrap";
import "./PopularLocations.scss";

const sunset = require("../../../public/assets/images/sunset.png");
const windy = require("../../../public/assets/images/windy.png");

const PopularLocations = () => {
  return (
    <>
      <p className="section-header">Popular Locations</p>
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
          <Card.Img variant="top" src={sunset} className="card-img" />
          <Card.Body>
            <Card.Title>London</Card.Title>
            <Card.Text>14°</Card.Text>
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
          <Card.Img variant="top" src={windy} className="card-img" />
          <Card.Body>
            <Card.Title>Glasgow</Card.Title>
            <Card.Text>16°</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default PopularLocations;

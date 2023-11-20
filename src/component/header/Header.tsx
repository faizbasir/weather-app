import React from "react";
import "./Header.scss";
import { InputGroup, Form, Button } from "react-bootstrap";
const image = require("../../../public/assets/images/weather-app.png");

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img src={image} alt="" className="logo" />
        <InputGroup className=" search-bar">
          <Form.Control
            placeholder="Search a city"
            aria-label="Search a city"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default Header;

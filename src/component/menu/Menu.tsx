import React from "react";
import "./Menu.scss";
const image = require("../../../public/assets/images/weather-app.png");

const Menu = () => {
  return (
    <>
      <div className="menu-container">
        <img src={image} alt="" className="logo" />
        <p>Overview</p>
        <p>Details</p>
        <p>Settings</p>
      </div>
    </>
  );
};
export default Menu;

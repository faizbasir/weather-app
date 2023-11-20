import React from "react";
import "./Overview.scss";
import Menu from "../../component/menu/Menu";

const Overview = () => {
  return (
    <>
      <div className="overview-container">
        <div className="one-day-forecast"> 24 hour forecast</div>
        <div className="seven-day-forecast"> 7 day forecast</div>
      </div>
    </>
  );
};

export default Overview;

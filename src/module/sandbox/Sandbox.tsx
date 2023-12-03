import React from "react";
import "./Sandbox.scss";
const sunny = require("../../../public/assets/images/sunny.png");

const Sandbox = () => {
  return (
    <>
      <div className="sandbox-container">
        <div className="card-content">
          <img src={sunny} alt="" className="sandbox-img" />
          <p className="text-sandbox">Something here</p>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="sandbox-img" />
          <p className="text-sandbox">Something here</p>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="sandbox-img" />
          <p className="text-sandbox">Something here</p>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="sandbox-img" />
          <p className="text-sandbox">Something here</p>
        </div>
        <div className="card-content">
          <img src={sunny} alt="" className="sandbox-img" />
          <p className="text-sandbox">Something here</p>
        </div>
      </div>
    </>
  );
};
export default Sandbox;

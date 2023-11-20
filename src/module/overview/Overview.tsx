import React from "react";
import "./Overview.scss";
import SavedLocations from "../savedLocations/SavedLocations";
import PopularLocations from "../popularLocations/PopularLocations";

const Overview = () => {
  return (
    <>
      <div className="overview-container">
        <div className="saved-locations">
          <SavedLocations />
          <PopularLocations />
        </div>
        <div className="current-location"> 7 day forecast</div>
      </div>
    </>
  );
};

export default Overview;

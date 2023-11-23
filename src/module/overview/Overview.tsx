import React from "react";
import "./Overview.scss";
import SavedLocations from "../savedLocations/SavedLocations";
import PopularLocations from "../popularLocations/PopularLocations";
import CurrentConditions from "../currentConditions/container/CurrentConditions";

const Overview = () => {
  return (
    <>
      <div className="overview-container">
        <div className="saved-locations">
          <SavedLocations />
          <PopularLocations />
        </div>
        <div className="current-location">
          <CurrentConditions />
        </div>
      </div>
    </>
  );
};

export default Overview;

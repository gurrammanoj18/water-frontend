import React from "react";
import "./loadingSpinner.css";

const DragonLoader: React.FC = () => {
  return (
    <div className="dragon-container">
      <div className="dragon-orbit">
        <div className="dragon-loader">
          <div className="dragon-body"></div>
          <div className="dragon-head"></div>
          <div className="dragon-tail"></div>
          <div className="fire"></div>
        </div>
      </div>
    </div>
  );
};

export default DragonLoader;

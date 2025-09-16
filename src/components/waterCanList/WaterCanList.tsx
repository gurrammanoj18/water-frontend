import React from "react";
import { WaterCan } from "../../types/WaterCan";
import "../waterCanList/waterCanList.css"; // import CSS

interface Props {
  cans: WaterCan[];
}

const WaterCanList: React.FC<Props> = ({ cans }) => {
  return (
    <div className="watercan-list-container">
      <h2>Available Water Cans</h2>
      {cans.length === 0 ? (
        <p>No cans available</p>
      ) : (
        <ul className="watercan-list">
          {cans.map((can) => (
            <li key={can.id} className="watercan-item">
              <strong>{can.customerName} </strong> {can.mobileNumber} — {can.noOfCans} cans — 📍 {can.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WaterCanList;

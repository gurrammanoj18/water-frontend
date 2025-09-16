import React from "react";
import "./whyChooseUs.css";
import saveWaterLogo from "../../assets/save-water-illustration-png.webp";
import globeWater from "../../assets/water-globe.jpg";

const ChooseUs: React.FC = () => {
  return (
    <div className="choose-div" id="sectionChoose">
      <h1 className="chooseHead">Why choose us ?</h1>
      <div className="chooseCard">
        <ul className="unorderList">
          <li>
            <span className="spanOne">Pure & Safe Water:</span> We deliver only
            high-quality water.
          </li>
          <li>
            <span className="spanOne">Timely & Reliable Delivery:</span> On-time
            deliveries, every time.
          </li>
          <li>
            <span className="spanOne">Affordable Pricing:</span> Premium water
            at competitive rates.
          </li>
          <li>
            <span className="spanOne">Excellent Customer Support:</span> Friendly team always ready to assist.
          </li>
          <img
            src={saveWaterLogo}
            alt="Save Water Illustration"
            className="saveWaterLogo"
          />
        </ul>
        <img
          src={globeWater}
          alt="Globe with Water"
          className="imgList"
        />
      </div>
    </div>
  );
};

export default ChooseUs;

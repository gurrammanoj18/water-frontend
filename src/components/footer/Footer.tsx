import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="followUS" id="sectionContact">
      <div className="items-container">
        <h1 className="followHead">Contact us at</h1>
        <div className="main-cont">
          <div className="iconContainer">
            <a href="tel:9398546891">
              <i className="fa-solid fa-phone icon"></i>
            </a>
          </div>

          <div className="iconContainer">
            <a href="mailto:manimanoj1851@gmail.com">
              <i className="fa-solid fa-envelope icon"></i>
            </a>
          </div>

          <div className="iconContainer">
            <a href="https://maps.app.goo.gl/QqnNgFecgbQReWcV7" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-location-dot icon"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="Lo-footer">
        <p>© {new Date().getFullYear()} Sri Mallikarjuna Water Services. All rights reserved.</p>
        <p className="credit">Designed & Built by <span>Manoj</span></p>
      </div>
    </div>
  );
};

export default Footer;

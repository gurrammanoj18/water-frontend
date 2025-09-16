import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { useNavigate } from 'react-router-dom';   // For page navigation
import "./banner.css";


const Banner = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/bookOnline'); // Replace '/form' with your actual route path
  };
  

  return (
    <div className="banner-container" id="sectionHome">
      {/* Background video */}
      <video
        className="video-banner"
        src="/videos/video-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for dark effect */}
      <div className="overlay"></div>

      {/* Content on top of the video */}
      <div className="banner">
        <h1 className="banner-eading">
          Welcome to our Website,
          <span className="h2-web-banner"> Pure water is the world’s first and foremost medicine. </span>
        </h1>

        <div className="banner-button-cont">
          {/* Button 1: Scroll to Services Section */}
          <ScrollLink
            to="sectionServices" // Make sure your Services section has id="sectionServices"
            smooth={true}
            duration={500}
          >
            <button className="banner-1-button">View More</button>
          </ScrollLink>

          {/* Button 2: Navigate to Form Page */}
          <button className="banner-2-button" onClick={goToForm}>
            Join with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

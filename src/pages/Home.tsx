import React, { useEffect, useState } from "react";
import { getAllCans, addCan } from "../api/api";
import { WaterCan } from "../types/WaterCan";

import Banner from "../components/banner/Banner";
import Services from "../components/services/Services";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel";

import ScrollButton from "../components/scrollButton/ScrollButton";
import ChatBot from "../components/chatBot/ChatBot";
import "../pages/home.css";




const Home: React.FC = () => {
  const [cans, setCans] = useState<WaterCan[]>([]);

  useEffect(() => {
    fetchCans();
  }, []);

  const fetchCans = async () => {
    try {
      const data = await getAllCans();
      setCans(data);
    } catch (error) {
      console.error("Error fetching cans:", error);
    }
  };

  const handleAddCan = async (can: WaterCan) => {
    try {
      const newCan = await addCan(can);
      setCans((prev) => [...prev, newCan]);
    } catch (error) {
      console.error("Error adding can:", error);
    }
  };

  return (
    <div className="home-container">
  <a className="options" id="home">

    <Banner />
 </a>

  <a className="options" id="services">
    <Services />
  </a>

  <a className="options" id="about">
    <WhyChooseUs />
  </a>

  <a className="options" id="reviews">
    <ReviewsCarousel />
  </a>



  <a className="options" id="contact">
   
    <ScrollButton />
    <ChatBot />

    
  </a>

</div>

  );
};

export default Home;

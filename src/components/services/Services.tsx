import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import coolImage from "../../assets-service/cool.webp";
import mineralImage from "../../assets-service/mineral.webp";
import deliveryImage from "../../assets-service/delivery.jpeg";
import functionImage from "../../assets-service/fun.png";
import plansImage from "../../assets-service/plans.png";
import emergencyImage from "../../assets-service/emergency.png";

const servicesData = [
  {
    id: "cool-water",
    title: "Cool Water",
    image: coolImage,
    description: "Cool water, pure and crystal clear, Provided by water plant services near...",
    fullText: "Our Cool Water is sourced from natural springs and chilled perfectly for refreshing taste."
  },
  {
    id: "mineral-water",
    title: "Mineral Water",
    image: mineralImage,
    description: "Pure, Refreshing, and Delivered to Your Doorstep...",
    fullText: "Our Mineral Water contains essential minerals for your health and hydration."
  },
  {
    id: "water-delivery",
    title: "Water Delivery",
    image: deliveryImage,
    description: "Reliable Water Delivery, Anytime You Need It...",
    fullText: "We deliver water to your doorstep at your convenience with punctuality and care."
  },
  {
    id: "function-supply",
    title: "Water Supply for Functions",
    image: functionImage,
    description: "Perfect Hydration for Every Occasion...",
    fullText: "We supply large quantities of water for events, functions, and public gatherings."
  },
  {
    id: "regular-delivery",
    title: "Regular Delivery Plans",
    image: plansImage,
    description: "Consistent water supply on your preferred schedule...",
    fullText: "Our Regular Delivery Plans ensure timely delivery weekly, bi-weekly, or monthly. Perfect for homes, offices, and schools, with sanitized cans and flexible rescheduling options."
  },
  {
    id: "emergency-supply",
    title: "Emergency Water Supply",
    image: emergencyImage,
    description: "24/7 urgent water supply when you need it most...",
    fullText: "Our Emergency Water Supply delivers safe drinking water during urgent situations. Fast response, ready-to-go cans and tankers, trusted for immediate, reliable delivery."
  }
];

const Services: React.FC = () => {
  return (
    <div id="sectionServices" className="services">
      <h1 className="businessHeading">
        Sri Mallikarjuna Water Services, <span className="villageName">VENGALAPOOR</span>
      </h1>
      <div className="f-cont">
        <h1 className="servicesHeading">Services we provide</h1>
        <p className="servicespara">
          We serve the best quality water nearby villages, look below for our more services
        </p>
      </div>

      <div className="card-container">
        {servicesData.map(service => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="cardOne"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={service.image} className="coolimg" alt={service.title} />
            <h2 className="cardhead">{service.title}</h2>
            <p className="cardpara">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;

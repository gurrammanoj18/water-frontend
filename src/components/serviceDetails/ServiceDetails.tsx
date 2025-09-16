import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./serviceDetails.css";
import coolImage from "../../assets-service/cool.webp";
import mineralImage from "../../assets-service/mineral.webp";
import deliveryImage from "../../assets-service/delivery.jpeg";
import functionImage from "../../assets-service/fun.png";
import plansImage from "../../assets-service/plans.png";
import emergencyImage from "../../assets-service/emergency.png";

const servicesData: Record<string, { title: string; image: string; text: string }> = {
  "cool-water": {
    title: "Cool Water",
    image: coolImage,
    text: `Our Cool Water is sourced from natural springs and chilled perfectly for a refreshing taste.
Each drop undergoes a multi-stage purification process to ensure it meets the highest quality standards.
The water is cooled to the ideal temperature, giving you an instant burst of freshness with every sip.
We use food-grade containers to maintain purity during storage and transportation.
Regular quality checks are performed to ensure mineral balance and safety.
Our distribution team ensures the water is delivered fresh and cold right to your doorstep.
Whether it's a hot summer day or a special occasion, our cool water keeps you hydrated and refreshed.
It is a perfect choice for households, offices, and small events needing chilled drinking water.
Customers trust our service for its consistent taste, safety, and timely delivery.
Stay refreshed, stay healthy — choose our Cool Water for your everyday hydration needs.`
  },

  "mineral-water": {
    title: "Mineral Water",
    image: mineralImage,
    text: `Our Mineral Water is rich in essential minerals that support your overall health and well-being.
It goes through a rigorous purification process to remove impurities while retaining natural minerals.
Each bottle is carefully sealed to ensure freshness and hygiene until it reaches your hands.
Regular lab testing guarantees the right balance of calcium, magnesium, and other key nutrients.
Its crisp and clean taste makes it perfect for daily hydration and healthy living.
We supply mineral water to homes, offices, schools, and commercial spaces across nearby villages.
Our packaging is eco-friendly and safe for storage over longer durations.
Enjoy safe, refreshing water that nourishes your body and keeps you active all day long.
Trusted by hundreds of local families for its unmatched purity and taste.
Stay hydrated the healthy way — choose our Mineral Water.`
  },

  "water-delivery": {
    title: "Water Delivery",
    image: deliveryImage,
    text: `Our Water Delivery service ensures clean drinking water reaches your doorstep on time.
We have a reliable fleet and trained delivery team to serve homes, shops, and offices efficiently.
Orders are processed quickly, and we provide same-day or scheduled delivery based on your needs.
All containers are sanitized before refilling and sealed tightly for hygiene.
We monitor delivery routes to ensure on-time arrivals even during peak hours.
Emergency delivery options are also available during urgent water shortages.
Our staff handle each delivery with care and professionalism for a hassle-free experience.
We maintain strict safety protocols during transportation to preserve water quality.
Customers appreciate our punctuality, friendly service, and transparent pricing.
Count on us for fast, reliable, and safe water delivery whenever you need it.`
  },

  "function-supply": {
    title: "Water Supply for Functions",
    image: functionImage,
    text: `We provide bulk water supply services specially designed for functions and large gatherings.
Our high-capacity tankers and cans can meet the hydration needs of any size event.
Each batch of water is tested for safety and quality before dispatch.
We coordinate closely with event organizers to ensure timely setup and refills during the function.
Our team stays on-site if needed to handle distribution throughout the event.
Perfect for weddings, receptions, cultural festivals, school events, and public functions.
We offer flexible delivery slots to avoid disruption to your event schedule.
All equipment and containers used are thoroughly sanitized and well maintained.
Our reliable service ensures guests stay refreshed and comfortable all day.
For stress-free event water arrangements, trust our Function Water Supply.`
  },

  "regular-delivery": {
    title: "Regular Delivery Plans",
    image: plansImage,
    text: `Our Regular Delivery Plans are designed to keep your water supply consistent without the hassle of reordering.
Customers can choose weekly, bi-weekly, or monthly schedules based on their needs.
We ensure timely doorstep delivery, so you never run out of drinking water.
Each can is thoroughly sanitized, sealed, and handled with care by our trained team.
Flexible rescheduling options are available if you are away or need extra supply.
Ideal for households, offices, schools, and small businesses needing uninterrupted hydration.
Regular plans come with priority delivery slots even during peak demand.
Customers enjoy discounted rates and zero delivery charges on long-term plans.
Stay hydrated without the stress — sign up for our Regular Delivery Plans today.`
  },

  "emergency-supply": {
    title: "Emergency Water Supply",
    image: emergencyImage,
    text: `Our Emergency Water Supply service ensures that you have access to safe drinking water during urgent situations.
Available 24/7, we prioritize fast delivery to homes, offices, and event locations.
Perfect for water shortages, pipe failures, or unexpected demand spikes.
We maintain ready-to-go sanitized cans and tankers to reach you within hours.
Our trained delivery team handles emergency requests with speed and professionalism.
We monitor local demand to optimize routes for the fastest service.
Customers trust us for immediate, reliable water delivery during critical times.
Stay prepared and hydrated — rely on our Emergency Water Supply whenever needed.`
  }
};

const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId as string];

  if (!service) return <h2>Service not found</h2>;

  return (
    <div className="service-details">
      
      <div className="details-container">
        <img src={service.image} className="detail-image" alt={service.title} />
        <div className="detail-text">
          <h1 className="detail-text-head">{service.title}</h1>
          {service.text
            .split(".")
            .map((sentence, index) =>
              sentence.trim() ? (
                <span key={index} className="detail-line">
                  {sentence.trim()}.
                  <br />
                </span>
              ) : null
            )}
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
    </div>
  );
};

export default ServiceDetails;

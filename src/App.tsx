import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./components/services/Services";
import ContactPage from "./components/footer/Footer";
import AboutPage from "./components/reviews/ReviewsCarousel";
import BookOnlinePage from "./components/waterCanForm/WaterCanForm";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ServiceDetails from "./components/serviceDetails/ServiceDetails";
import ReviewCarousel from "./components/reviews/ReviewsCarousel";
import PageLoader from "./components/loadingSpinner/LoadingSpinner"; // import your page loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate page load delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds, adjust as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />; // show loader before app renders
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewCarousel />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bookOnline" element={<BookOnlinePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

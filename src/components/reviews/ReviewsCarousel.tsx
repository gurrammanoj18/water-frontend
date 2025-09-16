import React, { useState, useEffect } from "react";
import axios from "axios";
import "./reviewsCarousel.css";

interface Review {
  id?: number;
  name: string;
  text: string;
  image: string;
}

const VISIBLE_DOTS = 5; // number of dots visible at a time
const DOT_SIZE = 22; // dot width + margin in px (adjust to match your CSS)

const ReviewCarousel: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [index, setIndex] = useState(0);

  // Form state
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  // Fetch reviews from backend API
  useEffect(() => {
    axios
      .get<Review[]>("http://localhost:8080/api/reviews")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return alert("Please fill all fields");

    const newReview: Review = {
      name,
      text,
      image: image || `https://i.pravatar.cc/100?u=${name}`,
    };

    try {
      const res = await axios.post<Review>(
        "http://localhost:8080/api/reviews",
        newReview
      );
      setReviews([...reviews, res.data]);
      setName("");
      setText("");
      setImage("");
      setIndex(reviews.length); // show the new review immediately
    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    }
  };

  if (reviews.length === 0) return <p>Loading reviews...</p>;

  // Calculate sliding window for 5 visible dots
  let startDot = Math.max(0, index - Math.floor(VISIBLE_DOTS / 2));
  let endDot = Math.min(reviews.length, startDot + VISIBLE_DOTS);
  if (endDot - startDot < VISIBLE_DOTS) {
    startDot = Math.max(0, endDot - VISIBLE_DOTS);
  }

  return (
    <div className="reviews-section" id="SectionReview">
      <h1 className="review-head-main">Customer Reviews</h1>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <img
            src={reviews[index].image}
            alt={reviews[index].name}
            className="review-image"
          />
          <p className="review-text">{reviews[index].text}</p>
          <h3 className="review-name">{reviews[index].name}</h3>

          {/* ◀ ▶ buttons */}
          <div className="button-group">
            <button
              className="nav-button"
              onClick={() =>
                setIndex((index - 1 + reviews.length) % reviews.length)
              }
            >
              ‹
            </button>
            <button
              className="nav-button"
              onClick={() => setIndex((index + 1) % reviews.length)}
            >
              ›
            </button>
          </div>

          {/* ••• sliding dot indicators */}
          <div className="dot-group">
            <div
              className="dot-container"
              style={{
                transform: `translateX(-${startDot * DOT_SIZE}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Review Submission Form */}
        <div className="review-form-container">
          <h3 className="review-head">Submit Your Review</h3>
          <form onSubmit={handleSubmit} className="review-form">
            <input 
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea 
              placeholder="Your Review"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;

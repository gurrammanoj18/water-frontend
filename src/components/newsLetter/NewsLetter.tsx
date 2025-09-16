import React, { useState } from "react";
import "./newsLetter.css";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate subscription success
    setMessage(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="newsletter-container">
      <h2 className="newsletter-head">Subscribe to our Newsletter</h2>
      <p className="newsletter-text">
        Get the latest updates, news, and offers directly in your inbox.
      </p>
      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};

export default Newsletter;

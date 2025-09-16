import React, { useState } from "react";
import axios from "axios";
import "../waterCanForm/waterCanForm.css";
import DragonLoader from "../loadingSpinner/LoadingSpinner"; // import dragon loader

const WaterCanForm: React.FC = () => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [noOfCans, setNoOfCans] = useState("");
  const [email, setEmail] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false); // state for loading

  // Restrict mobile number to digits only and max 10
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !address || !mobileNumber || !email || !noOfCans) {
      alert("Please fill all fields");
      return;
    }

    if (mobileNumber.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      setLoading(true); // show dragon loader
      await axios.post("http://localhost:8080/api/orders", {
        customerName,
        address,
        mobileNumber,
        email,
        noOfCans: Number(noOfCans),
      });

      setOrderPlaced(true);
      setCustomerName("");
      setAddress("");
      setMobileNumber("");
      setEmail("");
      setNoOfCans("");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to save order. Please try again.");
    } finally {
      setLoading(false); // hide loader
    }
  };

  return (
    <div className="watercan-form" id="sectionJoin">
      {loading && <DragonLoader />}

      {!loading && !orderPlaced && (
        <form className="form-cans" onSubmit={handleSubmit}>
          <h2>Place Water Can Order</h2>
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={handleMobileChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of Cans"
            value={noOfCans}
            onChange={(e) => setNoOfCans(e.target.value)}
          />
          <button type="submit">Submit Order</button>
        </form>
      )}

      {!loading && orderPlaced && (
        <div className="confirmation">
          <h2>✅ Order Placed Successfully!</h2>
          <button onClick={() => setOrderPlaced(false)}>Place Another Order</button>
        </div>
      )}
    </div>
  );
};

export default WaterCanForm;

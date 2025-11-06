import React, { useState } from "react";
import "./CelebrationBooking.css";

const BirthdayBooking = () => {
  const [form, setForm] = useState({
    ngoName: "",
    date: "",
    time: "",
    location: "",
    noOfPeople: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8082/ngo/BirthdayBookingServlet", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });

      if (response.ok) {
        setStatus("🎂 Birthday celebration booking submitted successfully!");
        setForm({
          ngoName: "",
          date: "",
          time: "",
          location: "",
          noOfPeople: "",
          message: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Unable to connect to the server.");
    }
  };

  return (
    <div className="celebration-booking-container birthday-bg">
      <h1>🎂 Birthday Celebration Booking</h1>
      <p>Make your birthday more meaningful by celebrating with those in need 💖</p>

      {status && <div className="status-message">{status}</div>}

      <form className="celebration-form" onSubmit={handleSubmit}>
        <label>NGO Name:</label>
        <input
          type="text"
          name="ngoName"
          value={form.ngoName}
          onChange={handleChange}
          placeholder="Enter NGO name"
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <label>Celebration Location:</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Enter full address"
          required
        />

        <label>Number of People:</label>
        <input
          type="number"
          name="noOfPeople"
          value={form.noOfPeople}
          onChange={handleChange}
          min="1"
          required
        />

        <label>Special Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message for this event..."
        ></textarea>

        <button type="submit">Submit Booking 🎉</button>
      </form>
    </div>
  );
};

export default BirthdayBooking;

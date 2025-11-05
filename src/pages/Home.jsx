import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const slides = [
    "/images/food-donation.jpg",
    "/images/education.jpg",
    "/images/children-smile.jpg",
    "/images/medical-help.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-container">
      {/* 🌍 Transparent Header */}
      <header className="home-header">
        <div className="logo">
          <h2>🌍 NGOCONNECT</h2>
        </div>
        <nav className="header-buttons">
          <button onClick={() => (window.location.href = "/about")}>About Us</button>
          <button onClick={() => (window.location.href = "/login")}>Login</button>
          <button onClick={() => (window.location.href = "/register")}>Register</button>
        </nav>
      </header>

      {/* 🖼️ Fullscreen Slideshow */}
      <div className="slideshow">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slide-${index}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}
        <div className="overlay"></div>

        {/* ✨ Centered Text on Image */}
        <div className="hero-text">
          <h1>Bringing Hope. Inspiring Change.</h1>
          <p>Together, we can create a better tomorrow for those in need.</p>
          <div className="hero-buttons">
            <button onClick={() => (window.location.href = "/donate-options")}>
              💖 Donate Now
            </button>
            <button onClick={() => (window.location.href = "/activities")}>
              🌍 Our Activities
            </button>
          </div>
        </div>
      </div>

      {/* ❤️ Support Section */}
      <section className="donate-support">
        <h2>Donate & Support</h2>
        <p>Your small contribution can create a big impact.</p>
        <div className="donate-grid">
          <div className="donate-card" onClick={() => (window.location.href = "/food-donation")}>
            <img src="/images/food-donation.jpg" alt="Food Donation" />
            <h3>🍲 Food Donation</h3>
          </div>
          <div className="donate-card" onClick={() => (window.location.href = "/books-donation")}>
            <img src="/images/education.jpg" alt="Book Donation" />
            <h3>📚 Book Donation</h3>
          </div>
          <div className="donate-card" onClick={() => (window.location.href = "/clothes-donation")}>
            <img src="/images/children-smile.jpg" alt="Cloth Donation" />
            <h3>👕 Cloth Donation</h3>
          </div>
          <div className="donate-card" onClick={() => (window.location.href = "/money-donation")}>
            <img src="/images/medical-help.jpg" alt="Money Donation" />
            <h3>💰 Money Donation</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

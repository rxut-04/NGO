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
            <button onClick={() => (window.location.href = "#booking-section")}>
              🎉 Booking
            </button>
            <button onClick={() => (window.location.href = "/activities")}> 🌍 Our Activities </button>
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

      {/* 🎉 Booking Section */}
      <section id="booking-section" className="booking-section">
        <h2>🎊 Celebrate with a Cause</h2>
        <p>Book special events at our NGO — spread happiness while celebrating your moments!</p>

        <div className="booking-grid">
          <div className="booking-card" onClick={() => (window.location.href = "/birthday-booking")}>
            <img src="/images/birthday.jpg" alt="Birthday Celebration" />
            <h3>🎂 Birthday Celebration</h3>
            <p>Celebrate your birthday with underprivileged children and bring smiles to their faces!</p>
          </div>

          <div className="booking-card" onClick={() => (window.location.href = "/anniversary-booking")}>
            <img src="/images/anniversary.jpg" alt="Anniversary" />
            <h3>💞 Anniversary Celebration</h3>
            <p>Mark your love by supporting a noble cause through your special day.</p>
          </div>

          <div className="booking-card" onClick={() => (window.location.href = "/festival-booking")}>
            <img src="/images/festival.jpg" alt="Festival Celebration" />
            <h3>🪔 Festival Celebration</h3>
            <p>Celebrate festivals with those who need love, care, and happiness the most.</p>
          </div>

          <div className="booking-card" onClick={() => (window.location.href = "/ngo-event-booking")}>
            <img src="/images/event.jpg" alt="NGO Event" />
            <h3>🤝 Host NGO Event</h3>
            <p>Organize social events, workshops, or community activities with our NGO team.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

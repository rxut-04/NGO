import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaTshirt, FaBook, FaRecycle, FaRupeeSign } from "react-icons/fa";
import "./DonateOptions.css";

function DonateOptions() {
  return (
    <div className="donate-container">
      <h1 className="donate-title">Choose How You’d Like to Donate ❤️</h1>
      <p className="donate-subtitle">
        Your small contribution can bring a big smile! Select a donation type below.
      </p>

      <div className="donate-options">
        <Link to="/food-donation" className="donate-card">
          <FaUtensils className="donate-icon food" />
          <h3>Food Donation</h3>
          <p>Help feed underprivileged families and children.</p>
        </Link>

        <Link to="/clothes-donation" className="donate-card">
          <FaTshirt className="donate-icon clothes" />
          <h3>Clothes Donation</h3>
          <p>Donate clothes to keep someone warm this season.</p>
        </Link>

        <Link to="/books-donation" className="donate-card">
          <FaBook className="donate-icon books" />
          <h3>Books Donation</h3>
          <p>Support education by donating your old books.</p>
        </Link>

        <Link to="/oldthings-donation" className="donate-card">
          <FaRecycle className="donate-icon oldthings" />
          <h3>Old Things</h3>
          <p>Give your old items a new purpose — to help others.</p>
        </Link>

        <Link to="/money-donation" className="donate-card">
          <FaRupeeSign className="donate-icon money" />
          <h3>Money Donation</h3>
          <p>Every rupee counts — donate to make a real difference.</p>
        </Link>
      </div>
    </div>
  );
}

export default DonateOptions;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>NGO-Connect</h3>
        <p>Connecting hearts to help those in need. Together, we can build a better tomorrow.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/donate-options">Donate</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/volunteers">Volunteers</NavLink>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
        <NavLink to="/refund-policy">Refund Policy</NavLink>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>📞 +91 9876543210</p>
        <p>📧 info@ngo-connect.org</p>
      </div>

      <p className="footer-bottom">© 2025 NGO-Connect | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

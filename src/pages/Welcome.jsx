import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [welcomeIndex, setWelcomeIndex] = useState(0);

  const quotes = [
    "“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela",
    "“Every child deserves a happy and healthy childhood.” — Anonymous",
    "“An investment in knowledge pays the best interest.” — Benjamin Franklin",
    "“Helping one person might not change the world, but it can change the world for one person.”"
  ];

  const welcomeLanguages = [
    "Welcome", "स्वागत है", "வாழ்த்துகள்", "ಸ್ವಾಗತ", "സ്വാഗതം", "સ્વાગત છે",
    "স্বাগতম", "స్వాగతం", "வணக்கம்", "नमस्ते", "శుభాగతం", "អរុណសួស្តី"
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    const welcomeInterval = setInterval(() => {
      setWelcomeIndex((prevIndex) => (prevIndex + 1) % welcomeLanguages.length);
    }, 3000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(welcomeInterval);
    };
  }, []);

  const enterSite = () => {
    navigate("/home");
  };

  const emojis = ["🌎", "❤️", "🍎", "📚", "🎁", "🩺", "🧸"];

  return (
    <div className="welcome-container">
      {/* Top banner showing one welcome at a time */}
      <div className="welcome-banner">
        <span className="welcome-word">{welcomeLanguages[welcomeIndex]}</span>
      </div>

      {/* Floating emojis */}
      <div className="emoji-container">
        {emojis.map((emoji, i) => (
          <span
            key={i}
            className="floating-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <h1 className="ngo-title">Helping Universe NGO</h1>
      <p className="quote">{quotes[quoteIndex]}</p>
      <button className="enter-button" onClick={enterSite}>Enter Site</button>
    </div>
  );
}

export default Welcome;

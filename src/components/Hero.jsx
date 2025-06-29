import React from "react";
import "./Hero.css";
import heroBg from "../assets/hero-bg.jpg"; // Replace with your background image path

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Powering a Sustainable Future</h1>
        <p>Revolutionizing mobility with clean, efficient energy solutions.</p>
        <a href="#about" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
}

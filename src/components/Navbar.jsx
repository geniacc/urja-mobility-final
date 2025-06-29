import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Replace with your logo image path

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Urja Mobility Logo" className="navbar-logo" />

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

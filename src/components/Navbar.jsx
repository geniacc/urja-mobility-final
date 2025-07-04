import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 10) {
        // scrolled down
        setHidden(true);
      } else if (currentY < lastScrollY.current - 10) {
        // scrolled up
        setHidden(false);
      }
      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${hidden ? " hidden" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="Urja Mobility" className="navbar-logo" />
      </div>

      <nav className="navbar-center">
        <Link to="/">Home</Link>
        {isHome ? (
          <>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <>
            <Link to="/#products">Products</Link>
            <Link to="/#contact">Contact</Link>
          </>
        )}
        <Link to="/policies/privacy">Privacy Policy</Link>
        <Link to="/policies">Policies</Link>
      </nav>

      <div className="navbar-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

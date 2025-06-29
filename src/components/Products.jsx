import React from "react";
import "./Products.css";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

export default function Products() {
  return (
    <section className="products-section" id="products">
      <h2>Our Products</h2>
      <div className="products-grid">
        <div className="product-card">
          <img src={product1} alt="Product 1" />
          <h3>Electric Scooters</h3>
          <p>Efficient, reliable, and eco-friendly mobility solutions for urban transport.</p>
        </div>
        <div className="product-card">
          <img src={product2} alt="Product 2" />
          <h3>Charging Solutions</h3>
          <p>Smart charging stations for convenient and rapid energy access.</p>
        </div>
        <div className="product-card">
          <img src={product3} alt="Product 3" />
          <h3>Battery Technology</h3>
          <p>Advanced battery systems designed for performance and sustainability.</p>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./Products.css";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

export default function Products() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (index) => {
    if (window.innerWidth <= 768) {
      setFlippedCard(flippedCard === index ? null : index);
    }
  };

  return (
    <section className="products-section" id="products">
      <h2>Our Products</h2>

      <div className="products-container">

        {/* Product 1 */}
        <div
          className={`flip-card ${flippedCard === 1 ? "flip-mobile" : ""}`}
          onClick={() => handleFlip(1)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={product1} alt="Electric Scooter" className="product-image" />
              <h3>Electric Scooters</h3>
              <p>Efficient, reliable, and eco-friendly mobility solutions.</p>
            </div>
            <div className="flip-card-back">
              <h3>Electric Scooters</h3>
              <p>
                Our electric scooters offer high performance, zero emissions, and minimal running costs. Ideal for urban commutes with advanced safety features and smart battery monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div
          className={`flip-card ${flippedCard === 2 ? "flip-mobile" : ""}`}
          onClick={() => handleFlip(2)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={product2} alt="Charging Solutions" className="product-image" />
              <h3>Charging Solutions</h3>
              <p>Smart charging stations for convenient and rapid energy access.</p>
            </div>
            <div className="flip-card-back">
              <h3>Charging Solutions</h3>
              <p>
                Our charging infrastructure ensures fast, reliable, and widespread charging options, supporting both battery swaps and conventional charging for maximum convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div
          className={`flip-card ${flippedCard === 3 ? "flip-mobile" : ""}`}
          onClick={() => handleFlip(3)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={product3} alt="Battery Technology" className="product-image" />
              <h3>Battery Technology</h3>
              <p>Advanced battery systems designed for performance and sustainability.</p>
            </div>
            <div className="flip-card-back">
              <h3>Battery Technology</h3>
              <p>
                We offer cutting-edge battery technology with long life, enhanced safety, superior energy density, and real-time IoT monitoring to maximize reliability and efficiency.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

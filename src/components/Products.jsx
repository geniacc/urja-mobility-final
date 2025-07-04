import React, { useState } from "react";
import "./Products.css";
import batteryImg from "../assets/battery-product.jpg";
import l2Img from "../assets/l2.jpg";
import l3Img from "../assets/l3.jpg";
import l5Img from "../assets/l5.jpg";

export default function Products() {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="products-section" id="products">
      
      <h2>Our Product</h2>
      
      <div className="product-intro">
        <img src={batteryImg} alt="Battery Icon" className="intro-image" />
        <h3>Advanced Battery Solutions for Electric Vehicles</h3>
        <p>
          Experience the next generation of energy storage with our state-of-the-art batteries, engineered for performance, reliability, and smart connectivity. Designed to power a range of electric vehicles, our batteries deliver exceptional value and peace of mind.
        </p>

       <h4>Key Features</h4>
<ul className="bullet-list">
  <li><strong>Long Life Cycle:</strong> Up to 2000 charge cycles for extended usage and reliability.</li>
  <li><strong>Comprehensive Warranty:</strong> Enjoy a 3-year warranty for worry-free usage.</li>
  <li><strong>Certified Quality:</strong> AIS 156 quality standard certified and verified for maximum safety and compliance.</li>
  <li><strong>Low Service Cost:</strong> Designed for minimal maintenance and reduced total cost of usage.</li>
  <li><strong>Smart IoT Enabled:</strong> All batteries come with integrated IoT features for real-time monitoring, diagnostics, and enhanced user experience.</li>
</ul>

      </div>

      <h2>Battery Options for Every Need</h2>

      <div className="products-container">
        
        {/* L2 Card */}
        <div
          className={`flip-card ${flippedCard === 1 ? "flip-mobile" : ""}`}
          onClick={() => handleFlip(1)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={l2Img} alt="L2 Battery" />
              <h3>L2 Battery</h3>
              <p>45–50 Ah | Lightweight, compact design</p>
            </div>
            <div className="flip-card-back">
              <h3>L2 Battery</h3>
              <p>Ideal for lightweight two-wheelers, offering a balance of capacity and portability.</p>
            </div>
          </div>
        </div>

        {/* L3 Card */}
        <div
          className={`flip-card ${flippedCard === 2 ? "flip-mobile" : ""}`}
          onClick={() => handleFlip(2)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={l3Img} alt="L3 Battery" />
              <h3>L3 Battery</h3>
              <p>100 Ah | High power, robust build</p>
            </div>
            <div className="flip-card-back">
              <h3>L3 Battery</h3>
              <p>Suited for mid-range vehicles requiring higher power output.</p>
            </div>
          </div>
        </div>

        {/* L5 Card */}
        <div
          className={`flip-card ${flippedCard === 3 ? "flip-mobile" : ""}`}
          onClick={() => handleFlip(3)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={l5Img} alt="L5 Battery" />
              <h3>L5 Battery</h3>
              <p>200 Ah | Maximum performance</p>
            </div>
            <div className="flip-card-back">
              <h3>L5 Battery</h3>
              <p>Built for heavy-duty applications, delivering top-tier performance.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

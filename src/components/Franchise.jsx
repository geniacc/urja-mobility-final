import React, { useState } from "react";
import "./Franchise.css";
import franchiseImage from "../assets/franchise.jpg";

export default function Franchise() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleInquiry = () => {
    window.open("mailto:info@urjamobility.in?subject=Franchise%20Inquiry", "_blank");
  };

  return (
    <section className="franchise-section" id="franchise">
      <div className="franchise-grid">
        <div className="franchise-text">
          <h2>Franchise With Urja Mobility</h2>
          <p>
            Join a thriving brand and unlock your entrepreneurial potential. By franchising with us, you gain access to a proven business model, comprehensive support, and a recognized name in the industry. We are committed to your success and provide the tools and resources you need to grow.
          </p>
          <button className="franchise-btn" onClick={handleInquiry}>
            Contact Franchise Team
          </button>
        </div>

        <div className="franchise-media">
          <img src={franchiseImage} alt="Franchise with Urja Mobility" />
        </div>
      </div>

      <div className="franchise-accordion">
        <div className="accordion-item">
          <h3 onClick={() => toggleSection(1)}>
            Why Partner With Us? <span>{openSection === 1 ? "▲" : "▼"}</span>
          </h3>
          <div className={`accordion-content ${openSection === 1 ? "open" : ""}`}>
            <ul>
              <li><strong>Established Brand Recognition:</strong> Leverage our trusted reputation and loyal customer base.</li>
              <li><strong>Comprehensive Training:</strong> Receive in-depth training on operations, marketing, and customer service.</li>
              <li><strong>Ongoing Support:</strong> Benefit from continuous assistance in marketing, operations, and management.</li>
              <li><strong>Proven Business Model:</strong> Operate with confidence using our tested systems and processes.</li>
              <li><strong>Marketing Assistance:</strong> Access national and local marketing campaigns to drive business growth.</li>
              <li><strong>Exclusive Territory:</strong> Enjoy the advantage of a protected area for your franchise.</li>
            </ul>
          </div>
        </div>

        <div className="accordion-item">
          <h3 onClick={() => toggleSection(2)}>
            Ideal Franchisee Profile <span>{openSection === 2 ? "▲" : "▼"}</span>
          </h3>
          <div className={`accordion-content ${openSection === 2 ? "open" : ""}`}>
            <ul>
              <li>Entrepreneurial and motivated to succeed</li>
              <li>Committed to delivering excellent customer service</li>
              <li>Willing to follow a proven system</li>
              <li>Financially prepared to invest in a growing business</li>
            </ul>
          </div>
        </div>

        <div className="accordion-item">
          <h3 onClick={() => toggleSection(3)}>
            Steps to Becoming a Franchisee <span>{openSection === 3 ? "▲" : "▼"}</span>
          </h3>
          <div className={`accordion-content ${openSection === 3 ? "open" : ""}`}>
            <ol>
              <li>Submit Your Application: Fill out our online franchise inquiry form.</li>
              <li>Initial Discussion: Speak with our franchise development team to learn more.</li>
              <li>Review & Approval: We’ll review your application and qualifications.</li>
              <li>Franchise Agreement: Sign the agreement and begin your journey.</li>
              <li>Training & Launch: Complete our training program and open your franchise.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="franchise-cta">
        <h3>Ready to Start?</h3>
        <p>
          Take the first step toward business ownership. Contact us today to learn more about franchising opportunities and how you can become part of our growing family.
        </p>
        <p>
          For more information, please fill out our franchise inquiry form or reach out to our franchise development team. We look forward to partnering with you!
        </p>
        <button className="franchise-btn" onClick={handleInquiry}>
          Start Your Franchise Inquiry
        </button>
      </div>
    </section>
  );
}

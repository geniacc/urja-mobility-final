import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have questions? Get in touch with our team for more information.</p>
        <a href="mailto:info@urjamobility.in" className="contact-btn">Email Us</a>
      </div>
    </section>
  );
}

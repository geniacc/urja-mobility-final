import React from "react";
import "./FranchiseForm.css";

export default function FranchiseForm() {
  return (
    <div className="franchise-form-page">
      <h2>Franchise Inquiry Form</h2>
      <form className="franchise-form" onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
      }}>
        <label>
          Full Name:
          <input type="text" placeholder="Enter your name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>

        <label>
          Phone Number:
          <input type="tel" placeholder="Enter your phone number" required />
        </label>

        <label>
          Location:
          <input type="text" placeholder="City/State" required />
        </label>

        <label>
          Message:
          <textarea placeholder="Tell us about your interest" required></textarea>
        </label>

        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
}

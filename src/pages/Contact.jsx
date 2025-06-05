import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Contact Details</label>
            <input type="text" placeholder="Enter your Contact number" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Write your message..." required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

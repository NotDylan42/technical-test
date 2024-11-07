// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Medcore Solutions is dedicated to providing exceptional staffing solutions for healthcare
            facilities, focusing on flexibility, efficiency, and high-quality patient care. With our expertise,
            we help hospitals enhance patient satisfaction and reduce costs through innovative staffing
            models.
          </p>
        </div>

        {/* Navigation Links Section */}
        <div className="footer-nav">
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// NavBar.js
import React, { useState } from 'react';
import './Navbar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/medcore_logo.webp`}
              alt="Medcore Solutions Logo"
              className="navbar-logo-image"
            />
          </a>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>
        <ul className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

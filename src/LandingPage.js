import React, { useState } from 'react';
import LeadForm from './LeadForm'; // Import the LeadForm component
import './LandingPage.css';
import NavBar from './Navbar.js'; // Import the NavBar component
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />

      <section 
        className="header-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/header-image.webp)`
          
        }} aria-label="Flexible Staffing Solutions background image">
        <div className="header-overlay">
          <h1>Flexible Staffing Solutions for your needs</h1>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-box">
          <div className="image-container">
            <img src="testimonials.webp" alt="Doctor giving testimonial about Medcore" className="circular-image" />
          </div>
          <div className="quote-container">
            <p className="quote-text">"Medcore Solutions' flexible staffing is revolutionizing hospitals, helping them increase retention and improve patient satisfaction through..."</p>
            <div className="button-container">
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <header className="landing-header">
      <h1>A Trifecta of Savings, Care, and Satisfaction</h1>
      </header>

      <section className="content-section">

        {/* Maximize Savings */}
        <div className="content-item">
          <div className="content-image">
            <img src="/patient-savings.webp" alt="Hospital Administrator increasing savings through flexible staffing" width="350px"/>
          </div>
          <div className="text-content">
            <h2>Maximize your Savings</h2>
            <p>In 2024, hospitals are harnessing the potential of flexible staffing to achieve remarkable cost savings. </p><br></br>
            <p>A recent survey by the American Hospital Association revealed that <b>67%</b> of hospitals have slashed labor costs by an average of <b>15%</b> through flexible staffing models, all while upholding top-notch patient care.</p>
          </div>
        </div>

        {/* Elevate Patient Care */}
        <div className="content-item">
          <div className="content-image-mobile">
            <img src="/patient-care.webp" alt="Doctor meeting with patient and increasing patient satisfaction" width="350px" height="150px"/>
          </div>
          <div className="text-content">
            <h2>Elevate your Patient Care</h2>
            <p>The tide is turning as hospitals increasingly embrace flexible staffing to elevate the quality of patient care.</p>
            <br></br>
            <p>Research published in the Journal of Nursing Administration paints a compelling picture: hospitals with flexible staffing models witnessed a <u><b>20% drop in patient wait times</b></u> and a <u><b>15% surge in patient satisfaction scores</b></u>, underscoring the profound positive impact of flexible staffing on patient well-being</p>
          </div>
          <div className="content-image-desktop">
            <img src="/patient-care.webp" alt="Doctor meeting with patient and increasing patient satisfaction" width="350px" height="150px"/>
          </div>
        </div>

        {/* Empower Staff Satisfaction */}
        <div className="content-item">
          <div className="content-image">
            <img src="/staff.webp" alt="Increased retention with hospital staff" width="350px"/>
          </div>
          <div className="text-content">
            <h2>Empower your Staff Satisfaction</h2>
            <p>Hospitals are embracing flexible staffing to empower their staff and combat burnout.</p>
            <p>A study by the Healthcare Management Association uncovered a <b>25%</b> decrease in staff turnover rates and a striking <b>30%</b> boost in overall staff morale in hospitals that have adopted flexible staffing, signaling a resounding victory for employee satisfaction and retention.</p>
          </div>
            
        </div>
      </section>
      <section 
        className="cta-footer"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/call-to-action.webp)`
        }}>
        <div className = "call-to-action-overlay">
          <h2>Learn how Medcore Solutions can help solve <em>your</em> staffing needs</h2>
        </div>
      </section>

      <section className = "form-section">
        <div>

        </div>
        <div>
        <LeadForm /> {/* LeadForm component here */}
        </div>

      </section>
      
      <Footer/>
    </div>
  );
};

export default LandingPage;

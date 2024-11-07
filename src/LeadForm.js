import React, { useState } from 'react';
import './LandingPage.css';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    facilityName: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className = "submission-confirmation-container">
      <div className="submission-confirmation">
        <p><b>Thanks for contacting us!</b></p> 
        <p>We will get in touch with you within <b>2 business days.</b></p> 
        <p>In the meantime, please enjoy some of our helpful articles: <a href="https://medcoresolutions.com/articles/">link</a></p>
      </div>
      </section>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Company, Hospital, or Facility Name:
        <input
          type="text"
          name="facilityName"
          value={formData.facilityName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Briefly give us a description of what staffing areas you need help with:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Start your journey with us</button>
    </form>
  );
};

export default LeadForm;

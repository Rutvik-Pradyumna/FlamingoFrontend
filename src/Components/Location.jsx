// Location.jsx (unchanged)
import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location-container">
      <h2>Our Location</h2>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0613701238435!2d78.5464284!3d17.3607797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99463ff9eb25%3A0x6b1ec7e65f32e6dd!2sFlamingo%20-%20The%20nail%20studio!5e0!3m2!1sen!2sin!4v1745250651311!5m2!1sen!2sin"
          width="100%"
          height="600" /* Increased height */
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
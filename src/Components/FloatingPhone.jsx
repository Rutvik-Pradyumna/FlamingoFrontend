// FloatingPhone.jsx
import React from 'react';
import './FloatingPhone.css';

const FloatingPhone = () => {
  return (
    <div className="floating-phone">
      <a href="tel:+918008162224">
        <span className="phone-icon">📞</span> +91 8008162224
      </a>
    </div>
  );
};

export default FloatingPhone;
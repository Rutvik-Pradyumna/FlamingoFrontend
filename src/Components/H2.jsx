// H2.jsx
import React from 'react';
import './H2.css';
import pic1 from './pic1.jpg'; // Single image file for all services

const H2 = () => {
  const services = [
    { title: 'Nail Extensions', image: pic1 },
    { title: 'Gel Polish', image: pic1 },
    { title: 'Overlay', image: pic1 },
    { title: 'Wedding Nails', image: pic1 },
    { title: 'Nail Art', image: pic1 },
    { title: 'Cats Eye', image: pic1 },
    { title: 'Ombre Nails', image: pic1 },
    { title: 'Toe Nails', image: pic1 },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="services-description">
        Whether it is simple nail art, overlay or toe nails we serve you with all your beauty needs with the
        best products coupled with dedicated services on board.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default H2;
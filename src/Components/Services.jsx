import React from 'react';
import './Services.css';
import pic1 from './pic1.jpg'; // Using pic1.jpg from the Components folder
import NailExtension from '../Images/NailExtension.jpg';
import NailArt from '../Images/NailArt.jpg';
import OverLay from '../Images/OverLay.jpg';
import OmbreNails from '../Images/OmbreNails.jpg';
import ThreeDNailArt from '../Images/3DNailArt.jpg';
import CatEye from '../Images/CatEye.jpg';
import ToeNails from '../Images/ToeNails.jpg';
import GelPolish from '../Images/GelPolish.jpg';
import BridalNails from '../Images/BridalNails.jpg';

import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
        const handleClick = () => {
        console.log("in HandleClick")
        navigate("/contact");
      };
  const popularServices = [
    { title: 'Nail Art', image: NailArt, description: 'Create stunning nail designs as long as beautiful as you too.' },
    { title: 'Nail Extension', image: NailExtension, description: 'Achieve longer, elegant nails with durable and stylish extensions.' },
    { title: 'Bridal Nails', image: BridalNails, description: 'Perfect bridal nails to stop the show on your portrait.' },
    { title: 'Toe Nails', image: ToeNails, description: 'This will make your feet pretty with this toe nail art.' }
  ];

  const moreServices = [
    { title: 'Ombre Nails', image: OmbreNails, description: 'You like the fade? Provide with the best ombre nails.' },
    { title: 'Overlay', image: OverLay, description: 'This makes the strength of the nails leaving it smooth.' },
    { title: 'Gel Polish', image: GelPolish, description: 'This turns your nails to the best polished for years.' },
    { title: 'Cats Eye', image: CatEye, description: 'This will work on the cats eye nail art.' },
    ,
  ];

  return (
    <div className="services-container">
      <h2>Popular and in-demand</h2>
      <div className="services-grid">
        {popularServices.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>More Services</h2>
      <div className="services-grid">
        {moreServices.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="query-section">
        <h3>Have Other Queries?</h3>
        <p>Is there something else you need? Just let us know with us.</p>
        <button onClick={handleClick} className="query-button">Let’s Talk</button>
      </div>
    </div>
  );
};

export default Services;
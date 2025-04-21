import React from "react";
import "./H2.css";
import pic1 from "./pic1.jpg"; // Using the same image for all services
import NailExtension from '../Images/NailExtension.jpg';
import NailArt from '../Images/NailArt.jpg';
import OverLay from '../Images/OverLay.jpg';
import OmbreNails from '../Images/OmbreNails.jpg';
import ThreeDNailArt from '../Images/3DNailArt.jpg';
import CatEye from '../Images/CatEye.jpg';
import ToeNails from '../Images/ToeNails.jpg';
import GelPolish from '../Images/GelPolish.jpg';
import BridalNails from '../Images/BridalNails.jpg';

const H2 = () => {
  const services = [
    { title: "Nail Extensions", image: NailExtension },
    { title: "Gel Polish", image: GelPolish },
    { title: "Overlay", image: OverLay },
    { title: "Wedding Nails", image: BridalNails },
    { title: "Nail Art", image: NailArt },
    { title: "Cats Eye", image: CatEye },
    { title: "Ombre Nails", image: OmbreNails },
    { title: "Toe Nails", image: ToeNails },
    // { title: "French Manicure", image: pic1 },
    // { title: "Acrylic Nails", image: pic1 },
    // { title: "Shellac Nails", image: pic1 },
    // { title: "Glitter Nails", image: pic1 },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="services-description">
        Whether it is simple nail art, overlay, or toe nails, we serve you with all your beauty needs using the best products and dedicated services.
      </p>
      <div className="services-flex">
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

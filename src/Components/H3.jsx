// H3.jsx
import React from 'react';
import './H3.css';
import aboutMeImage from './pic1.jpg'; // Replace with your image path
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


const H3 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
  console.log("in HandleClick")
  navigate("/contact");
};

  
  return (
    <div className="h3-container">
      {/* About Me Section */}
      <div className="about-me-section">
        <img src={aboutMeImage} alt="About Me" className="about-me-image" />
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            I have over 10 years of experience and certifications that commend our work. Booking
            appointments, events, and more. We handle everything from manicures to nail art, ensuring
            client satisfaction with top-notch professionalism. Our team has honed their skills in the
            art of nail care.
          </p>
          <button className="book-appointment-btn" onClick={handleClick}>Book Appointment</button>

        </div>
      </div>

      {/* See Our Work Section */}
      <div className="work-section">
        <h2>See Our Work!</h2>
        <p className="work-caption">
          Here's a quick look at the nail art work we've worked on. You can trust us with your hands
          and feet with our varied services.
        </p>
        <div className="work-grid">
          <img src={ThreeDNailArt} alt="Work 1" />
          <img src={BridalNails} alt="Work 2" />
          <img src={CatEye} alt="Work 3" />
          <img src={NailArt} alt="Work 4" />
          {/* <img src={work5} alt="Work 5" />
          <img src={work6} alt="Work 6" />
          <img src={work7} alt="Work 7" />
          <img src={work8} alt="Work 8" />
          <img src={work9} alt="Work 9" /> */}
        </div>
      </div>
    </div>
  );
};

export default H3;
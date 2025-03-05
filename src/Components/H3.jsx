// H3.jsx
import React from 'react';
import './H3.css';
import aboutMeImage from './pic1.jpg'; // Replace with your image path
import work1 from './pic1.jpg'; // Replace with your image paths
import work2 from './pic1.jpg';
import work3 from './pic1.jpg';
import work4 from './pic1.jpg';
import work5 from './pic1.jpg';
import work6 from './pic1.jpg';
import work7 from './pic1.jpg';
import work8 from './pic1.jpg';
import work9 from './pic1.jpg';
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
          <img src={work1} alt="Work 1" />
          <img src={work2} alt="Work 2" />
          <img src={work3} alt="Work 3" />
          <img src={work4} alt="Work 4" />
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
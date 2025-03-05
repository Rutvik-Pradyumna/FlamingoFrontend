// Home.jsx
import React from 'react';
import './H1.css';
import nailArtistImage from './pic1.jpg'; 
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
    const handleClick = () => {
    console.log("in HandleClick")
    navigate("/contact");
  };
  return (
    <div className="home-container">
      <div className="content-section">
        <h1>We are Passionate Nail Artists Based in Hyderabad.</h1>
        <p>
          Looking for the best Nail services in town? Our team of experienced
          beauticians offers all the nail services you've been waiting for.
        </p>
        <button className="book-appointment-btn" onClick={handleClick}>Book Appointment</button>

      </div>
      <div className="image-section">
        <img src={nailArtistImage} alt="Nail Artist" />
      </div>
    </div>
  );
};

export default Home;
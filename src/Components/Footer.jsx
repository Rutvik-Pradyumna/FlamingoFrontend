import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>NailArt</h2>
        <p>Follow us on Social Media</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/nailsbyflamingo_/?igsh=bGN5ZXM2NWYwczR1&utm_source=qr#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Email</h3>
          <p>Nailsbyflamingo@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>Hno. 11-13-877/3, Green Hills Colony Rd Number 3,Dwarka Nagar, Kothapet, Hyderabad, Telangana 500035</p>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Nail Extensions</a></li>
            <li><a href="#">Gel Polish</a></li>
            <li><a href="#">Bridal Nails</a></li>
            <li><a href="#">Overlay</a></li>
            <li><a href="#">Ombre Nails</a></li>
            <li><a href="#">Cats Eye</a></li>
            <li><a href="#">Toe Nails</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Business Hours</h3>
          <p>Monday – 11.00 – 08.00</p>
          <p>Tuesday : 11.00 – 08.00</p>
          <p>Wednesday : 11.00 – 08.00</p>
          <p>Thursday : 11.00 – 08.00</p>
          <p>Friday : 11.00 – 08.00</p>
          <p>Saturday : 11.00 – 08.00</p>
          <p>Sunday : 11.00 – 08.00</p>
          <p>Working all days for you.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Flamingo</p>
      </div>
    </footer>
  );
};

export default Footer;

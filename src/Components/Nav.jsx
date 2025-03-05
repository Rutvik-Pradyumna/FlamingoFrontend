// Nav.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Navbar-container">
      <header className="header navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <div className="logo navbar-brand">
            <h1>NailArt <span>by Enturi</span></h1>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navigation */}
          <div className="collapse navbar-collapse navbar-content" id="navbarNav">
            <nav className="menu  navbar-nav  me-auto mb-2 mb-lg-0 ">
              <a href="/" className="nav-link">Home</a>
              {/* <a href="/about" className="nav-link">About</a> */}
              <a href="/services" className="nav-link">Services</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>

            <div className="social-contact d-none d-lg-flex">
              <a href="https://facebook.com" className="social-icon mx-2 p-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" className="social-icon mx-2 p-2 ">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" className="social-icon mx-2 p-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
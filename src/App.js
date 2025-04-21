import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/home';
import Footer from './Components/Footer';
import Contact from './Components/contact';
import Services from './Components/Services';
import FloatingPhone from './Components/FloatingPhone';
import Location from './Components/Location';





function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Nav  />
          {/* <FloatingPhone /> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/about" /> */}
            <Route path="/services" element={<Services />}/>
            <Route path="/contact" element={<Contact />}/>
            
            
          </Routes>
          <Location />
          <Footer  />
        </div>
      </Router>
    </div>
  );
}

export default App;
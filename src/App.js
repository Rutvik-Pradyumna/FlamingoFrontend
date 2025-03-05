import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/home';
import Footer from './Components/Footer';
import Contact from './Components/contact';
import FloatingPhone from './Components/FloatingPhone';




function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Nav  />
          <FloatingPhone />
          <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/about" /> */}
            <Route path="/sevices" />
            <Route path="/contact" element={<Contact />}/>
            
          </Routes>
          <Footer  />
        </div>
      </Router>
    </div>
  );
}

export default App;
// C1.jsx
import React from 'react';
import './C1.css';

const C1 = () => {
  return (
    <div className="c1-container">
      <div className="contact-content">
        <div className="contact-text">
          <h2>We would love to hear from You.</h2>
          <p>
            Have any beauty queries or simply need to enquire about any of our services? Feel free to get
            in touch. You can call us for urgent appointments or submit the form here for any other
            queries you may have.
          </p>
          <div className="contact-details">
            <p>
              <span className="icon location">📍</span> 8-2-405/B/5/A, Road number 4, Banjara Hills,
              Hyderabad - 500 034.
            </p>
            <p>
              <span className="icon phone">📞</span> +91 9008162224
            </p>
            <p>
              <span className="icon email">📧</span> nailishq@gmail.com
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default C1;
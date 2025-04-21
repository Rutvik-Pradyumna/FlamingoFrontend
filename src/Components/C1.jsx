// C1.jsx
import React, { useState } from 'react';
import './C1.css';
import { useNavigate } from 'react-router-dom'; // Import navigate for redirection

const C1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    let res;
    e.preventDefault();
    const { name, email, subject, message } = formData;
    console.log(formData);

    res = await fetch('http://localhost:5000/api/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    console.log(res.body);

    if (res.status === 400) {
      console.log(res.status);
      alert('Couldn\'t send message!! An error occurred');
    } else {
      console.log(res.status);
      alert('Message sent successfully! Please check your email for confirmation (if applicable)');
      navigate('/'); // Redirect to home page or another page after success
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    }
  };

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
              <span className="icon location">📍</span> Hno. 11-13-877/3, Green Hills Colony Rd Number 3, Kothapet, Hyderabad, Telangana 500035
            </p>
            <p>
              <span className="icon phone">📞</span> +91 7793988803
            </p>
            <p>
              <span className="icon email">📧</span> Nailsbyflamingo@gmail.com
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default C1;
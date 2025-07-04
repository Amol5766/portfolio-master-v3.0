import React, { useState } from 'react';
import Planet from './Planet';
import './ContactForm.css'; 
import {toast} from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://portfolio-backend-wo3d.onrender.com/api/contacts/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Form submission response:', data);
      toast.success('Form submitted sucessfully');
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <p><span className="purple">GET IN TOUCH 🚀</span></p>
        <h1 className="title">Contact.</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="purple"><strong>Name :</strong></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="purple"><strong>Email :</strong></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="purple"><strong>Message :</strong></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="What do you want to say?"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit"><strong>Send</strong></button>
        </form>
        <div id="responseMessage"></div>
      </div>
      <div className="planet-container">
        <Planet />
      </div>
    </div>
  );
};

export default ContactForm;

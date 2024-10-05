import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">New Message</h2>
        <div className="form-group">
          <label className="form-label">From:</label>
          <input 
            type="email" 
            name="from" 
            className="form-input" 
            value={formData.from} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Subject:</label>
          <input 
            type="text" 
            name="subject" 
            className="form-input" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
        </div>

        {/* Controls */}
        <div className="form-controls">
          <div className="text-controls">
            <button type="button" className="icon-button">
              <FontAwesomeIcon icon={faBold} />
            </button>
            <button type="button" className="icon-button">
              <FontAwesomeIcon icon={faItalic} />
            </button>
            <button type="button" className="icon-button">
              <FontAwesomeIcon icon={faUnderline} />
            </button>
            <button type="button" className="icon-button">
              <FontAwesomeIcon icon={faAlignLeft} />
            </button>
            <button type="button" className="icon-button">
              <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <button type="button" className="icon-button">
              <FontAwesomeIcon icon={faAlignRight} />
            </button>
          </div>

          <button type="submit" className="send-button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

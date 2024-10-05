import React from 'react';
import './Footer.css'; 
import Logo from '../Imgs/Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={Logo} alt="Nova Tech Logo" className="footer-logo" />
        <p className="footer-text">Bringing Innovation to the Stars</p>
        <div className="footer-links">
        </div>
      </div>
    </footer>
  );
}

export default Footer;

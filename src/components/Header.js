import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import './Header.css'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const { isLoggedIn ,logout , Email , SetEmail } = useAuth();
  const [userEmail, setUserEmail] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    position: 'fixed',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '89%',
    height: scrolled ? '135px' : '150px',
    borderRadius: '0 0 50px 50px',
    maxWidth: '1400px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(5px)',
    transition: 'height 0.8s ease'
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout(); 
    SetEmail('');
    setDropdownOpen(false);
  };

  return (
    <header style={headerStyle}>
      <div className="logo" style={{ flexGrow: 1, textAlign: 'center' }}>
        <Link to="/">NovaTech</Link>
      </div>

      {!scrolled && ( 
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#" onClick={scrollToAbout}>About</Link></li> 
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/Forum">Forum</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {!isLoggedIn && <li className="login-item-small-screen"><Link to="/Login">Login</Link></li>}
          </ul>
        </nav>
      )}

      {!scrolled && (
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
      )}

      { !scrolled && isLoggedIn ? (
        <div className="user-icon" onClick={toggleDropdown} style={{ position: 'relative', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: 'rgb(0,70,87)', color: 'white', fontWeight: 'bold' }}>
          {Email.charAt(0).toUpperCase()} 
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" onClick={() => setDropdownOpen(false)} style={{marginTop : "16px"}}>Profile</Link>
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </div>
          )}
        </div>
      ) : (
        !scrolled && (
          <Link to="/Login" className="login-button">Login</Link>
        )
      )}
    </header>
  );
}

export default Header;

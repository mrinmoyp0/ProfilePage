import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <p className="footer-text">
          Designed & Built by Mrinmoy Pathak &copy; 2026
        </p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          &#8679;
        </button>
      </div>
    </footer>
  );
};

export default Footer;

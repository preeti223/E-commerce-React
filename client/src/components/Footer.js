



import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
    
      
      {/* Footer Description */}
      <p className="footer-description">
        At Him&Her, we are passionate about making you feel stylish and comfortable. 
        From providing high quality products to maintaining an amiable environment in 
        the stores, we make sure that you look good and feel good. Hope you have a 
        stress-free shopping experience at him&her.
      </p>

      {/* Contact Information */}
      <div className="contact-info">
        <p>TEL: 01-4584447</p>
        <p>MOB: 01-4485453</p>
        <p>INFO@him&her.org</p>
      </div>


      {/* Footer Links */}
      <div className="footer-links">
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Privacy</li>
          <li>Blogs</li>
        </ul>
        <ul>
          <li>Terms</li>
          <li>Contact</li>
          <li>Coupons</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-tiktok"></i>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 HIM&HER ® All Rights Reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;

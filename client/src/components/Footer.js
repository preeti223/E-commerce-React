// // src/components/Footer.js
// import React from 'react';
// import './Footer.css'; // Import styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; 2024 KTM City. All rights reserved.</p>
//       <p>Contact: support@ktmcity.com | +977-01-1234567</p>
//       <p>Location: Kathmandu, Nepal</p>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Newsletter Section */}
      {/* <div className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">&#10148;</button>
        </div>
      </div> */}

      {/* Footer Description */}
      <p className="footer-description">
        At KTM CTY, we are passionate about making you feel stylish and comfortable. 
        From providing high quality products to maintaining an amiable environment in 
        the stores, we make sure that you look good and feel good. Hope you have a 
        stress-free shopping experience at KTM CTY.
      </p>

      {/* Contact Information */}
      <div className="contact-info">
        <p>TEL: 01-4584447</p>
        <p>MOB: 01-4485453</p>
        <p>INFO@KTMCITY.ORG</p>
      </div>

      {/* App Download Section */}
      <div className="app-download">
        <p>Download App</p>
        <img src="https://www.ktmcty.com/frontend/assets/media/app_qrcode.png" alt=""></img>
        <div className="store-buttons">
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
            alt="App Store" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Google Play" 
          />
        </div>
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
        <p>© 2024 KTM CTY ® All Rights Reserved</p>
        
      </div>
    </footer>
  );
};

export default Footer;

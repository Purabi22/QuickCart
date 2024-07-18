import React from 'react';
import './SocialMediaLinks.css'; // Import related CSS file

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <h3>Social Media Links</h3>
      <ul className="social-icons">
        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;

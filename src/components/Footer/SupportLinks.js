import React from 'react';
import './SupportLinks.css'; // Import related CSS file

const SupportLinks = () => {
  return (
    <div className="support-links">
      <h3>Support Links</h3>
      <ul className="links-list">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Contact Support</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Shipping Information</a></li>
      </ul>
    </div>
  );
};

export default SupportLinks;

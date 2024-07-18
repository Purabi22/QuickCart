import React from 'react';
import './AboutUsLinks.css'; // Import related CSS file

const AboutUsLinks = () => {
  return (
    <div className="about-us-links">
      <h3>About Us Links</h3>
      <ul className="links-list">
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Mission & Vision</a></li>
        <li><a href="#">Leadership Team</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  );
};

export default AboutUsLinks;

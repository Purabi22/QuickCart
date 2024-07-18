import React from 'react';
import './Banner.css'; // Import the CSS file for Banner

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Welcome to Razorpay</h1>
        <p className="banner-description">
          Discover our wide range of products and enjoy seamless shopping
          experience.
        </p>
        <button className="banner-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;

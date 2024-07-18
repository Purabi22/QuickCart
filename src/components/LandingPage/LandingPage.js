// src/components/LandingPage/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Welcome to Your E-commerce Platform</h2>
      <p>Please register or log in to continue.</p>
      <div className="auth-options">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;

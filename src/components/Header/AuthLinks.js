import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLinks.css'; // Import your CSS file for styling

const AuthLinks = ({ isAuthenticated }) => {
  return (
    <div className="auth-links">
      {isAuthenticated ? (
        <>
          <Link to="/profile" className="auth-link">
            Profile
          </Link>
          <Link to="/settings" className="auth-link">
            Settings
          </Link>
          <Link to="/logout" className="auth-link">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="auth-link">
            Login
          </Link>
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthLinks;

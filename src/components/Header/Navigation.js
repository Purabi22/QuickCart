import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your CSS file for styling

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home" className="navbar-link">
        QuickCart
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/checkout" className="nav-link">
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

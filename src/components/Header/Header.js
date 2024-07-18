import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import AuthLinks from './AuthLinks';
import './Header.css'; // Import your CSS file for styling

const Header = ({ isAuthenticated }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Navigation />
        <div className="header-right">
          <SearchBar />
          <CartIcon />
          <AuthLinks isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </header>
  );
};

export default Header;

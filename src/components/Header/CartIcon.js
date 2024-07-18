import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartIcon.css'; // Ensure the correct path to your CSS file

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <Link to="/cart" className="cart-link">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </div>
  );
};

export default CartIcon;

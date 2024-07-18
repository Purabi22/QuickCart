import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Adjust the import path as needed

const CartSummary = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;

import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Adjust the import path as needed
import CartSummary from './CartSummary'; // Import the CartSummary component
import './CartPage.css'; // Import the CSS file


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <CartSummary /> {/* Include the CartSummary component */}
        </>
      )}
    </div>
  );
};

export default CartPage;

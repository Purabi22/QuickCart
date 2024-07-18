// CartItemList.js
import React from 'react';

const CartItemList = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item-list">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;

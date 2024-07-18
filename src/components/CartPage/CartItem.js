import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    onUpdateQuantity(item.id, e.target.value);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-price">${item.price}</p>
        <div className="item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
      </div>
      <div className="item-remove">
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

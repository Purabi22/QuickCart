import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ cart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} x {item.quantity}: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h4>Total: ${totalAmount}</h4>
    </div>
  );
};

export default OrderSummary;

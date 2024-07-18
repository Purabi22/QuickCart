import React from 'react';
import './OrderConfirmation.css'; // Import related CSS file

const OrderConfirmation = ({ shippingDetails, orderTotal }) => {
  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      {shippingDetails && (
        <>
          <h3>Shipping Details</h3>
          <p>{shippingDetails.fullName}</p>
          <p>{shippingDetails.address}</p>
          <p>
            {shippingDetails.city}, {shippingDetails.state} - {shippingDetails.zip}
          </p>
          <p>{shippingDetails.country}</p>
        </>
      )}
      <h3>Order Total</h3>
      <p>Total Price: ${orderTotal ? orderTotal.toFixed(2) : '0.00'}</p>
      {/* Additional order details */}
    </div>
  );
};

export default OrderConfirmation;

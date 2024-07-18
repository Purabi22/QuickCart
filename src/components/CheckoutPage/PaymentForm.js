import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ onSubmit }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(paymentDetails);
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h3>Payment Details</h3>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          value={paymentDetails.expiryDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          name="cvv"
          value={paymentDetails.cvv}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;

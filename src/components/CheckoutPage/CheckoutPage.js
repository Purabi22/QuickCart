// src/components/CheckoutPage.js

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartPage/CartContext';
import EmailService from '../EmailService'; // Adjust path as per your project structure
import ShippingDetailsForm from './ShippingDetailsForm';
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';
import PDFReceipt from '../PDFReceipt'; // Import PDFReceipt component
import './CheckoutPage.css'; // Import the CSS file

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState('shipping'); // Track the current step of the checkout process
  const [emailSent, setEmailSent] = useState(false); // State to track if email has been sent
  const navigate = useNavigate();

  const handleShippingSubmit = (shippingDetails) => {
    console.log('Shipping details submitted:', shippingDetails);
    setCurrentStep('payment'); // Move to the payment step
  };

  const handlePaymentSubmit = async (paymentDetails) => {
    console.log('Payment details submitted:', paymentDetails);

    // Placeholder for order details
    const orderDetails = {
      items: cart,
      total: calculateTotal(), // Implement your own function to calculate total
      // Add more order details as needed
    };

    // Simulate sending email receipt
    const emailResult = await EmailService.sendEmailReceipt('test@example.com', orderDetails);
    console.log(emailResult); // Log email result (success or failure)

    // Clear cart after successful payment
    clearCart();
    setEmailSent(true);

    // Move to success step after handling payment
    setCurrentStep('success');
  };

  const calculateTotal = () => {
    // Placeholder for calculating total amount
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleReturnToHome = () => {
    navigate('/home'); // Navigate to the homepage
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 && currentStep !== 'success' ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="checkout-sections">
            {currentStep === 'shipping' && <ShippingDetailsForm onSubmit={handleShippingSubmit} />}
            {currentStep === 'payment' && <PaymentForm onSubmit={handlePaymentSubmit} />}
            {currentStep === 'success' && (
              <div className="payment-success">
                <h3>Payment Successful!</h3>
                <p>Thank you for your purchase.</p>
                <PDFReceipt orderDetails={cart} /> {/* Display PDFReceipt component */}
                <button onClick={handleReturnToHome}>Return to Homepage</button>
              </div>
            )}
            {currentStep !== 'success' && <OrderSummary cart={cart} />}
          </div>
          {emailSent && <p className="email-sent-message">Email receipt sent.</p>}
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

import React, { useState } from 'react';
import './ShippingDetailsForm.css';

const ShippingDetailsForm = ({ onSubmit }) => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(shippingDetails);
    }
  };

  return (
    <form className="shipping-details-form" onSubmit={handleSubmit}>
      <h3>Shipping Details</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={shippingDetails.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={shippingDetails.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={shippingDetails.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={shippingDetails.zip}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Proceed to Payment</button>
    </form>
  );
};

export default ShippingDetailsForm;

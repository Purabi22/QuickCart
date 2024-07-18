import React, { useState } from 'react';
import './ForgotPassword.css'; // Ensure you have the corresponding CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your password recovery logic here (simulated for this example)
    // Normally, this would involve sending an email to the user with a password reset link

    // Simulated logic
    if (email.trim() === '') {
      setMessage('Please enter your email');
    } else {
      setMessage(`Password recovery email sent to ${email}`);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
      <div className="login-link">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

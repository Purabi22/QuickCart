import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import UserService from '../UserService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook from React Router to handle navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = UserService.login(email, password);
    setMessage(result.message);
    if (result.success) {
      // Redirect to homepage after successful login
      navigate('/home');
    }
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password (e.g., redirect to forgot password page)
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
        {message && <p>{message}</p>}
      </form>
      <p><Link to="/forgot-password">Forgot password?</Link></p>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';  // Import Navigate for redirect
import './Auth.css';

const Auth = ({ isLogin }) => {
  const [authData, setAuthData] = useState({
    username: '',
    password: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);  // For auth status

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';
    console.log('Auth Submitted:', url, authData);

    // Simulate authentication logic
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;  // Redirect after successful login
  }

  return (
    <div className="auth-form">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={authData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={authData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Auth;

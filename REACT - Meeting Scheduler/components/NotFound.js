// src/components/NotFound.js
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go back home</a>
    </div>
  );
};

export default NotFound;

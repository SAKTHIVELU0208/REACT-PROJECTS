import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/scheduler');
  };

  return (
    <div className="home-page">
      <h1>Welcome to Online Meeting Scheduler</h1>
      <p>Organize and manage your meetings with ease.</p>
      <button className="cta-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default HomePage;

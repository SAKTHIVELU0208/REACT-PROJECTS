// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Logo" className="logo" />
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/scheduler">Schedule Meeting</a>
        <a href="/meetings">Meetings</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;

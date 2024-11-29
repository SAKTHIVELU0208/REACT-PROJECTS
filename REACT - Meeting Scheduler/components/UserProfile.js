// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <p>Email: {user.email}</p>
      <p>Joined: {new Date(user.joinedDate).toLocaleDateString()}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default UserProfile;

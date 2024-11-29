import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    // Fetch profile data from the API
    axios.get('http://localhost:5000/users/1')  // Assuming user ID 1
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update profile data
    axios.put('http://localhost:5000/users/1', profileData)  // Assuming user ID 1
      .then(response => {
        console.log('Profile Updated:', response.data);
        alert('Profile Updated Successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

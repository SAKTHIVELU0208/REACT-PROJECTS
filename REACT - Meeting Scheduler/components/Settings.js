import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [visibility, setVisibility] = useState('public');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved!');
  };

  return (
    <div className="settings">
      <form onSubmit={handleSave}>
        <h2>Settings</h2>
        <label>
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={(e) => setNotifications(e.target.checked)} 
          />
          Enable Notifications
        </label>
        <label>
          Profile Visibility:
          <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends-only">Friends Only</option>
          </select>
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;

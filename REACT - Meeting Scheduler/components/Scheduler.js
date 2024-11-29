import React, { useState } from 'react';
import axios from 'axios';
import './Scheduler.css';

const Scheduler = () => {
  const [meetingData, setMeetingData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });

  const handleChange = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post the new meeting to the JSON Server
    axios.post('http://localhost:5000/meetings', meetingData)
      .then(response => {
        console.log('Meeting Scheduled:', response.data);
        alert(`Meeting Scheduled: ${meetingData.title} on ${meetingData.date} at ${meetingData.time}`);
      })
      .catch(error => {
        console.error('Error scheduling meeting:', error);
      });
  };

  return (
    <div className="scheduler">
      <h2>Schedule a Meeting</h2>
      <form className="scheduler-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Meeting Title"
          value={meetingData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={meetingData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={meetingData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={meetingData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Schedule Meeting</button>
      </form>
    </div>
  );
};

export default Scheduler;

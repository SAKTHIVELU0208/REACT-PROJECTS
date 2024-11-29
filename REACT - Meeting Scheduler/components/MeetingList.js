import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Removed 'navigate'
import './MeetingList.css';

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [meetingData, setMeetingData] = useState({ title: '', date: '', time: '' });

  useEffect(() => {
    // Fetch meetings from the JSON server
    axios
      .get('http://localhost:5000/meetings')
      .then((response) => {
        setMeetings(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the meetings!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/meetings/${id}`)
      .then(() => {
        // Remove the deleted meeting from the list
        setMeetings(meetings.filter((meeting) => meeting.id !== id));
      })
      .catch((error) => {
        console.error('There was an error deleting the meeting!', error);
      });
  };

  const handleEdit = (meeting) => {
    setEditMode(meeting.id);
    setMeetingData({ title: meeting.title, date: meeting.date, time: meeting.time });
  };

  const handleSave = (id) => {
    axios
      .put(`http://localhost:5000/meetings/${id}`, meetingData)
      .then(() => {
        setMeetings(
          meetings.map((meeting) =>
            meeting.id === id ? { ...meeting, ...meetingData } : meeting
          )
        );
        setEditMode(null); // Exit edit mode
      })
      .catch((error) => {
        console.error('There was an error updating the meeting!', error);
      });
  };

  const handleChange = (e) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  return (
    <div className="meeting-list-container">
      <div className="meeting-list">
        <h2>Upcoming Meetings</h2>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              {editMode === meeting.id ? (
                <div className="edit-meeting">
                  <input
                    type="text"
                    name="title"
                    value={meetingData.title}
                    onChange={handleChange}
                    placeholder="Meeting Title"
                  />
                  <input
                    type="date"
                    name="date"
                    value={meetingData.date}
                    onChange={handleChange}
                    placeholder="Meeting Date"
                  />
                  <input
                    type="time"
                    name="time"
                    value={meetingData.time}
                    onChange={handleChange}
                    placeholder="Meeting Time"
                  />
                  <button onClick={() => handleSave(meeting.id)}>Save</button>
                  <button onClick={() => setEditMode(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <Link to={`/meeting/${meeting.id}`}>
                    {meeting.title} - {meeting.date} at {meeting.time}
                  </Link>
                  <button onClick={() => handleEdit(meeting)}>Edit</button>
                  <button onClick={() => handleDelete(meeting.id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MeetingList;

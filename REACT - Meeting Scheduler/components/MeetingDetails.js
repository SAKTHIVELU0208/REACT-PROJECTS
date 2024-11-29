import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MeetingDetails.css';

const MeetingDetails = () => {
  const { id } = useParams();
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    // Fetch the meeting details based on the ID
    axios.get(`http://localhost:5000/meetings/${id}`)
      .then(response => {
        setMeeting(response.data);
      })
      .catch(error => {
        console.error('Error fetching meeting details:', error);
      });
  }, [id]);

  if (!meeting) {
    return <p>Loading meeting details...</p>;
  }

  return (
    <div className="meeting-details">
      <h2>{meeting.title}</h2>
      <p>Date: {meeting.date}</p>
      <p>Time: {meeting.time}</p>
      <p>Description: {meeting.description}</p>
    </div>
  );
};

export default MeetingDetails;

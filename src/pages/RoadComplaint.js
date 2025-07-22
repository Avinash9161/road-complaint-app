import React, { useState } from 'react';

const RoadComplaint = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ image, location, feedback });
    alert('Road complaint submitted!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <h2>Road Complaint</h2>

      <label>Upload Photo:</label><br />
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} /><br /><br />

      <label>Enter Location:</label><br />
      <input type="text" value={location} onChange={e => setLocation(e.target.value)} required /><br /><br />

      <label>Feedback (after resolution):</label><br />
      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} /><br /><br />

      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default RoadComplaint;

import React, { useState } from 'react';

const VehicleComplaint = () => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ vehicleNo, feedback });
    alert('Vehicle complaint submitted!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <h2>Vehicle Complaint</h2>

      <label>Vehicle Number:</label><br />
      <input type="text" value={vehicleNo} onChange={e => setVehicleNo(e.target.value)} required /><br /><br />

      <label>Feedback (after resolution):</label><br />
      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} /><br /><br />

      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default VehicleComplaint;

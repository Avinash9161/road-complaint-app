import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Complaint Portal</h1>
      <p>Please choose complaint type:</p>
      <button onClick={() => navigate('/road')}>Road Complaint</button>
      <button onClick={() => navigate('/vehicle')} style={{ marginLeft: '10px' }}>
        Vehicle Complaint
      </button>
    </div>
  );
};

export default Index;

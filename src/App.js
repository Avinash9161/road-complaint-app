import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoadComplaint from './pages/RoadComplaint';
import VehicleComplaint from './VehicleComplaint';
import Index from './pages/Index';
import './styles/ComplaintForm.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/road" element={<RoadComplaint />} />
        <Route path="/vehicle" element={<VehicleComplaint />} />
      </Routes>
    </Router>
  );
}

export default App;

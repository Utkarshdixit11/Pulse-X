import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PatientDashboard from './pages/patient/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import { DefaultDemo } from './components/DemoAnimatedText';

function App() {
  // Intro logic moved to Home.jsx

  return (
    <Router>
      <div className="bg-white text-neutral-900 selection:bg-indigo-100 selection:text-indigo-900 antialiased font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/demo-text" element={<DefaultDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

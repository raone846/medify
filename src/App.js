import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Bookings from './Bookings/Bookings';
import Navbar from './components/Navbar'; // Your navigation bar component
import Hospitals from './Hospital/Hospitals';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar for consistent navigation */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/search" element={<Hospitals />} /> {/* Search Route */}
        <Route path="/bookings" element={<Bookings />} /> {/* Bookings Route */}
      </Routes>
    </Router>
  );
}

export default App;

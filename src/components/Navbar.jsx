import React, { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [selectedPage, setSelectedPage] = useState(null);
  const navigate = useNavigate();

  const handlePageSelect = (page) => {
    setSelectedPage(page); // Update the selected page
    console.log('Selected Page:', page); // Optionally log or use the value

    if (page === 'Hospitals') {
      navigate('/search'); // Navigate to /search when the page is "Hospitals"
    } if(page === 'bookings') {
      navigate('/bookings');
    } if(page === 'home'){
      navigate('/');
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#2AA8FF',
          color: 'white',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
      </div>
      <ResponsiveAppBar onPageSelect={handlePageSelect} />
    </div>
  );
}

export default Navbar;

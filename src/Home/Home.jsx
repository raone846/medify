import React from 'react';
import Hero from '../components/Hero';
import OffersCarousel from '../components/OffersCarousel';
import Specialisation from '../components/Specialisation';
import SpecialistCarousal from '../components/SpecialistCarousal';
import PatientCaring from '../components/PatientCaring';
import Blogs from '../components/Blogs';
import Stats from '../components/Stats';
import FAQs from '../components/FAQs';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import SearchWithSuggestions from '../components/SearchWithSuggestions';
import Box from '@mui/material/Box';

function Home() {
  return (
    <div>
      <Box sx={{ position: 'relative', width: '100%' }}>
        {/* Hero Section */}
        <Box sx={{ width: '100%' }}>
          <Hero />
        </Box>

        {/* SearchWithSuggestions Section */}
        <Box sx={{
          position: 'relative', 
          top: '-315px', // Adjust top position to place it below the Hero
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: '80%',
        }}>
          <SearchWithSuggestions />
        </Box>

        {/* Offers Carousel Section */}
        <Box sx={{
          width: '100%',
          marginTop: '0px', // Adjust to provide space after SearchWithSuggestions
        }}>
          <OffersCarousel />
        </Box>
      </Box>

      {/* Rest of the content, which will naturally flow below */}
      <Specialisation />
      <SpecialistCarousal />
      <PatientCaring />
      <Blogs />
      <Stats />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default Home;

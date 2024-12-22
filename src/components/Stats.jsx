import React from 'react';
import Box from '@mui/material/Box';
import St1 from '../assets/st1.png';
import St2 from '../assets/st2.png';
import St3 from '../assets/st3.png';
import St4 from '../assets/st4.png';
import StatsCard from './StatsCard';

function Stats() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
        padding: '32px',
        display: 'flex',
        justifyContent: 'space-between', // Ensures spacing between text and cards
        gap: 4,
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          width: '40%', 
          height:'90%',// Take half the width
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt:20,
          pl:10
        }}
      >
        <Box sx={{ color: '#2AA7FF', fontWeight: 500, textAlign:'left' }}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </Box>
        <Box
          sx={{
            color: '#1B3C74',
            fontSize: '48px',
            fontWeight: '600',
            textAlign:'left'
          }}
        >
          Our Families
        </Box>
        <Box
          sx={{
            color: '#77829D',
            lineHeight: '1.6',
            textAlign:'left'
          }}
        >
          We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
        </Box>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          width: '50%', // Take half the width
          display: 'grid',
          gridTemplateColumns: '1.2fr 2fr', // Two columns
          gap: '20px', // Space between cards
          alignItems: 'center', // Center align cards vertically
        }}
      >
        <StatsCard img={St1} text="5000+" type="Happy Patients" cardColor="#EBF7FF" />
        <StatsCard img={St2} text="200+" type="Hospitals" cardColor="#FFF2F0" />
        <StatsCard img={St3} text="1000+" type="Laboratories" cardColor="#FFF7E6" />
        <StatsCard img={St4} text="700+" type="Expert Doctors" cardColor="#EBFAF1" />
      </Box>
    </Box>
  );
}

export default Stats;

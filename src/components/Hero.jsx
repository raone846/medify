import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import doctors from '../assets/NicePng_doctor-png.png';

function Hero() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
          height: '100vh',
          display: 'flex',
          textAlign: "left",
          px: 25, // Padding for horizontal spacing
        }}
      >
        {/* Text Section */}
        <Box sx={{ flex: 1, pr: 4, pt:10 }}>
          <Box sx={{ fontFamily: 'Poppins', color: '#102851', fontSize: '31px', fontWeight: '500' }}>
            Skip the travel! Find Online{' '}
            <span style={{ fontSize: '56px', color: 'black' }}>Medical</span>
            <span style={{ fontSize: '56px', color: '#2AA8FF' }}> Centers</span>
            <p style={{ color: '#5C6169', fontSize: '20px' }}>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </p>
          </Box>
          <Box>
            <Button
              sx={{
                background: '#2AA8FF',
                color: 'white',
                textTransform: 'none',
                mt: 2, // Margin for spacing
                width:"177px",
                height:"48px",
                fontSize: "16px"
              }}
            >
              Find Centers
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'left', pt:5 }}>
          <Box
            component="img"
            src={doctors}
            alt="Doctors"
            sx={{
              height: '481px',
              width: '585px',
            }}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Hero;

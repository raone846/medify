import React from 'react';
import Box from '@mui/material/Box';
import PhoneFrame from '../assets/PhoneFrame.png'; // Assuming this is the frame image
import PhoneScreen from '../assets/PhoneScreen.png'; // Assuming this is the screen image

function PhoneCard() {
  return (
    <Box sx={{ 
        position: 'relative', 
        width: '300px', 
        height: '590px', 
        overflow: 'hidden', 
        borderRadius: '40px',
        background: 'transparent', // Make the background transparent
      }}>
      {/* Phone Frame */}
      <img
        src={PhoneFrame}
        alt="Phone Frame"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2, // Ensure the frame stays behind the screen
        }}
      />

      {/* Phone Screen */}
      <img
        src={PhoneScreen}
        alt="Phone Screen"
        style={{
          width: '314%', // Stretch the screen to 100% of the frame's width
          height: '100%', // Stretch the screen to 100% of the frame's height
          objectFit: 'cover', // Ensure the screen fills the frame without overflowing
          position: 'absolute',
          top: -13,
          left: -320,
          zIndex: 1, // Ensure the screen stays on top of the frame
        }}
      />
    </Box>
  );
}

export default PhoneCard;

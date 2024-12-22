import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Gpay from '../assets/gpay.png';
import AppleStore from '../assets/appplay.png';
import PhoneCard from './PhoneCard';

function DownloadApp() {
  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)', 
    }}>
      
      {/* Left Box with Image or Placeholder */}
      <Box sx={{ 
        width: '45%', 
        height: '100%', 
        background: '#f0f0f0', 
        ml: 5, 
        position: 'relative', 
        display: 'flex'
      }}>
        {/* Wrapping the PhoneCards in Boxes to control overlap */}
        <Box sx={{ position: 'absolute', top: '-140px', left: '170px', zIndex: 2 }}>
          <PhoneCard />
        </Box>
        <Box sx={{ position: 'absolute', top: '-220px', left: '360px', zIndex: 1 }}>
          <PhoneCard />
        </Box>
      </Box>

      {/* Right Box with Text and Input */}
      <Box sx={{ width: '45%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt:10, mb:10 }}>
        <Typography sx={{ fontSize: '48px', fontWeight: '600', color: '#1B3C74', width: '50%', textAlign: 'left' }}>
          Download the <span style={{ color: '#2AA7FF' }}>Medify</span> App
        </Typography>
        <Typography sx={{ color: '#414146', fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>
          Get the link to download the app
        </Typography>

        {/* Container for label and input */}
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box
            sx={{
              width: '10%', // Adjust as needed
              height: '40px', // Same height as input
              backgroundColor: '#fff',
              color: '#000000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
              borderRadius: '5px 0 0 5px',
              border: '1px solid #ccc' // Round left side
            }}
          >
            +91
          </Box>
          <input
            placeholder='Enter phone number'
            style={{
              width: '65%', // Adjust width to take remaining space
              height: '40px',
              padding: '0 10px',
              borderRadius: '0 5px 5px 0', // Round right side
              border: '1px solid #ccc',
            }}
          />
          <Box
            sx={{
              width: '20%', // Adjust as needed
              height: '40px', // Same height as input
              backgroundColor: '#2AA7FF',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '600',
              borderRadius: '5px', 
              border: '1px solid #ccc',
              ml: '5px' // Round left side
            }}
          >
            Send SMS
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Box 
            component='img'
            src={Gpay}
            alt='Gpay' 
            sx={{
              height: '69px',
              width: '224px',
              mr: 2
            }}
          />
          <Box 
            component='img'
            src={AppleStore}
            alt='AppleStore'
            sx={{
              height: '69px',
              width: '224px',
              ml: 2
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DownloadApp;

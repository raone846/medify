import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo.png';
import Facebook from '../assets/fb.png';
import X from '../assets/x.png';
import Youtube from '../assets/yt.png';
import Printrest from '../assets/pr.png';

function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
        background: '#1B3C74',
        width: '100%',
        height: '424px',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'space-between', // Space out the items
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      {/* Upper content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          width: '80%', // Adjust width as needed
          mt:6
        }}
      >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column', // Stack logo and images vertically
                alignItems: 'center', // Center logo and images horizontally
                justifyContent: 'space-between', // Distribute space
                height: '100%', // Ensure the container spans full height
            }}
            >
            {/* Logo */}
            <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                    height: '36px', // Adjust as needed
                    width: '127px',
                    marginBottom: '16px', // Space below logo
                }}
            />
            {/* Images (self-closing tags) */}
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center', // Center images horizontally
                gap: '10px', // Space between images
                marginTop: 'auto', // Push images to the bottom
                }}
            >
                <Box
                component="img"
                src={Facebook} // Replace with your image source
                alt="Facebook"
                sx={{ height: '35.2px', width: '35.2px' }} // Adjust size as needed
                />
                <Box
                component="img"
                src={X} // Replace with your image source
                alt="X"
                sx={{ height: '35.2px', width: '35.2px' }} // Adjust size as needed
                />
                <Box
                component="img"
                src={Youtube}// Replace with your image source
                alt="Youtube"
                sx={{ height: '35.2px', width: '35.2px' }} // Adjust size as needed
                />
                <Box
                component="img"
                src={Printrest} // Replace with your image source
                alt="Printrest"
                sx={{ height: '35.2px', width: '35.2px' }} // Adjust size as needed
                />
            </Box>
        </Box>

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px', // Spacing between items
                justifyContent: 'space-between', // Alignment of rows
                ml:50
            }}
            >
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%', // Ensure three items fit per row
                textAlign:'left'
                }}
            >
                &gt; About Us
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Orthology
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; About Us
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Our Pricing
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Neurology
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Our Pricing
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Our Gallery
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Dental Care
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Our Gallery
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Appointment
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Opthalmology
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Appointment
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Privacy Policy
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Cardiology
            </Typography>
            <Typography
                sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '400',
                width: '30%',
                textAlign:'left'
                }}
            >
                &gt; Privacy Policy
            </Typography>
        </Box>
      </Box>

      {/* Copyright box */}
      <Box
        sx={{
          color: '#fff',
          fontSize: '16px',
          fontWeight: 400,
          borderTop: '1px solid #FFFFFF1A',
          width: '80%',
          paddingTop: '10px',
          marginTop: '20px',
          textAlign:'left'
        }}
      >
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;

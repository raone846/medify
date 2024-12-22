import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Detox from '../assets/Detox.png';
import BlogD from '../assets/BlogD.png';

function BlogCard() {
  return (
    <Box
      sx={{
        width: '363px',
        height: '458px',
        border: '1px solid #00000012',
        borderRadius:'5px'
      }}
    >
      {/* Top Image */}
      <Box
        component="img"
        src={Detox}
        alt="Detox"
        sx={{
          width: '100%',
          height: '294.95px',
          objectFit: 'cover',
          borderRadius:'5px' // Ensures the image doesn't shrink or stretch
        }}
      />

      {/* Text and Bottom Section */}
      <Box sx={{ padding: '16px' }}>
        {/* First and Second Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Stack text vertically
            gap: 1, // Space between the first and second text
            alignItems: 'flex-start', // Align text to the left
          }}
        >
          <Typography
            variant="body2"
            color="#77829D"
          >
            Medical | March 31, 2022
          </Typography>
          <Typography
            variant="h7"
            color="#1B3C74"
            sx={{
              fontWeight: 500,
              textAlign: 'left', // Explicitly aligns text to the left
            }}
          >
            6 Tips To Protect Your Mental Health When You’re Sick
          </Typography>
        </Box>

        {/* Author Section (Image and Third Text) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center', // Align image and text vertically
            gap: 1, // Space between the image and text
            marginTop: '12px',
          }}
        >
          <Box
            component="img"
            src={BlogD}
            alt="BlogD"
            sx={{
              width: '32px', // Adjust size as needed
              height: '32px',
              borderRadius: '50%', // Makes the image circular
              objectFit: 'cover',
            }}
          />
          <Typography
            variant="body2"
            color="#1B3C74"
            sx={{
              fontWeight: 500,
            }}
          >
            Rebecca Lee
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogCard;

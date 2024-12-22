import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FaqImg from '../assets/FaqImg.png';
import HealthEmot from '../assets/HealthEmot.png';
import Emot from '../assets/Emot.png';
import { Button } from '@mui/material';

function FAQs() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stacks items vertically
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* Introductory Text */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="body1" color="#2AA7FF">
          Get Your Answer
        </Typography>
        <Typography variant="h4" color="#1B3C74" fontWeight="600" fontSize="48px">
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* Container for Images and Accordion */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          mt: 5,
          gap: 5,
        }}
      >
        {/* Box for Images */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            position: 'relative',
            width: '50%', // Adjust width as needed
          }}
        >
          {/* First Image */}
        <Box 
        sx={{
            position: 'absolute',
            top: '10px',
            left: '150px',
            width: '500px',
            height: '500px', // Adjusted height for the parent box
            zIndex: 1,
            boxShadow: '0px 15px 55px -10px #00000017', // Correct property name
        }}
        >
            <Box
                component="img"
                src={FaqImg}
                alt="FaqImg"
                sx={{
                width: '97%', // Fills parent box's width
                height: '97%', // Fills parent box's height
                objectFit: 'fill', // Stretches the image to fit the Box dimensions
                }}
            />
        </Box>

          
          {/* Second Image */}
          <Box
            sx={{
                position: 'absolute',
                top: '120px',
                left: '610px',
                width: '80px',
                height: '80px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                background: '#FFFFFF',
                borderRadius: '50%',
                boxshadow: '0px 15px 25px 0px #0000000F'

                }}
          >
            <Box
                component="img"
                src={HealthEmot}
                alt="HealthEmot"
                sx={{
                    width:'40px',
                    height: '40px'
                }}
            />
          </Box>
          
          {/* Third Image with Content */}
          <Box
            sx={{
                position: 'absolute',
                top: '355px',
                left: '80px',
                width: '235px',
                height: '86px',
                zIndex: 3,
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0px 15px 35px -5px #00000012',
                display: 'flex',
                flexDirection: 'row', // Align items horizontally
                justifyContent: 'flex-start', // Align items at the start of the flex container
                alignItems: 'center', // Vertically center the content
                padding: 2,
                gap: 1, // Add spacing between image and text
            }}
            >
            {/* Image on the Left */}
            <Box
                component="img"
                src={Emot}
                alt="Emot"
                sx={{
                width: '44px',
                height: '44px',
                }}
            />

                {/* Text on the Right */}
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack the two lines vertically
                    justifyContent: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ color: '#1B3C74', fontWeight: '600', textAlign:'left' }}>
                    84k+
                    </Typography>
                    <Typography
                    variant="body2"
                    sx={{
                        color: '#77829D',
                        textAlign: 'left', // Align text to the left
                    }}
                    >
                    Happy Patients
                    </Typography>
                </Box>
            </Box>

        </Box>

        {/* Box for Accordion */}
        <Box
            sx={{
                width: '50%', // Adjust width as needed
                background: '#fff',
                borderRadius: '10px',
                padding: '20px',
                height: '499px',
                display: 'flex',
                flexDirection: 'column', // Stack inner boxes vertically
                justifyContent: 'flex-start', // Align the boxes at the top
                alignItems: 'flex-start', // Align text to the left
            }}
            >
            {/* Inner Boxes */}
            <Box sx={{ width: '464px', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '18px', color: '#1B3C74'}}>Why choose our medical for your family?</Typography>
                <Button sx={{ fontSize: '20px', color: '#2AA7FF' }}>+</Button>
            </Box>

            <Box sx={{ width: '464px', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '18px', color: '#1B3C74'}}>Why we are different from others?</Typography>
                <Button sx={{ fontSize: '20px', color: '#2AA7FF' }}>+</Button>
            </Box>

            <Box sx={{ width: '464px', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '18px', color: '#1B3C74'}}>Trusted & experienced senior care & love</Typography>
                <Button sx={{ fontSize: '20px', color: '#2AA7FF' }}>+</Button>
            </Box>

            <Box sx={{ width: '464px', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '18px', color: '#1B3C74'}}>How to get appointment for emergency cases?</Typography>
                <Button sx={{ fontSize: '20px', color: '#2AA7FF' }}>+</Button>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FAQs;

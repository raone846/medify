import React from 'react';
import Box from '@mui/material/Box';
import Drugstore from '../assets/Drugstore.png';
import Stethoscope from '../assets/Stethoscope.png';
import HeartRate from '../assets/Heart Rate.png';
import HeartRateMonitor from '../assets/Heart Rate Monitor.png';
import BloodSample from '../assets/Blood Sample.png';
import Immune from '../assets/Immune.png';
import XRay from '../assets/X-Ray.png';
import Card from './Card';
import Grid from '@mui/material/Grid'; // Import Grid from Material-UI
import { Button } from '@mui/material';

function Specialisation() {

  const cards = [
    { img: Drugstore, text: "Dentistry" },
    { img: Stethoscope, text: "Primary Care" },
    { img: HeartRate, text: "Cardiology" },
    { img: HeartRateMonitor, text: "MRI Resonance" },
    { img: BloodSample, text: "Blood Test" },
    { img: Immune, text: "Piscologist" },
    { img: Drugstore, text: "Laboratory" },
    { img: XRay, text: "X-Ray" },
  ];

  return (
    <Box sx={{ 
        background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)', 
        pt: 5, 
        pb: 5,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    }}>
        <Box sx={{ color:'#1B3C74', fontSize: '48px', fontWeight: '600', mb: 4, textAlign: 'center' }}>
            Find By Specialisation
        </Box>
        
        {/* Grid container with centered content */}
        <Grid container spacing={3} justifyContent="center" sx={{ px: 2, maxWidth: '1200px' }}>
              {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card img={card.img} text={card.text} />
                </Grid>
              ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              sx={{
                background: '#2AA8FF',
                color: 'white',
                textTransform: 'none',
                mt: 2, // Margin for spacing
                width:"147px",
                heigth:"50px"
              }}
            >
              View All
            </Button>
        </Box>
    </Box>
  );
}

export default Specialisation;

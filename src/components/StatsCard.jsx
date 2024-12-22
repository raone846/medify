import React from 'react';
import Box from '@mui/material/Box';

function StatsCard({img, text, type, cardColor}) {
  return (
    <Box sx={{
        height:'304px', 
        width:'242.5px', 
        background:'white',
        display: 'flex',
        flexDirection: 'column', // Stacks items vertically
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px'
    }}>
        <Box sx={{
            height:'100px',
            width: '100px',
            borderRadius: '50%',
            background: cardColor,
            display: 'flex',
            flexDirection: 'column', // Stacks items vertically
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box 
                component='img'
                src={img}
                alt={text}
                sx={{
                    width: '50%',
                    height: '50%',
                    objectFit: 'contain',
                }}
            />
        </Box>
        
        <Box sx={{fontWeight:'600', fontSize:'48px', color:'#1B3C74'}}>{text}</Box>
        <Box sx={{fontWeight:'500', fontSize:'18px', color:'#77829D'}}>{type}</Box>
    </Box>
  )
}

export default StatsCard
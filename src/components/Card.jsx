import React from 'react';
import Box from '@mui/material/Box';

function Card({img, text}) {
  return (
    <Box sx={{
        width:"270px", 
        height:"180px", 
        background:'white',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius:"10px"
    }}>
        <Box
            component="img"
            src={img}
            alt={text}
            sx={{
                height: "80px",
                width: "80px"
            }}
        />
        <Box sx={{color:'#ABB6C7', fontSize: '18px', fontWeight: '500', pt:3}}>
            {text}
        </Box>
    </Box>
    
  )
}

export default Card
import React from 'react';
import Box from '@mui/material/Box';

function SearchCard({img, text, bgcolor, brcolor, fcolor, fweight}) {
  return (
    <Box sx={{
        width:"203px", 
        height:"153px", 
        background: bgcolor,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius:"10px",
        border: `1px solid ${brcolor}`
    }}>
        <Box
            component="img"
            src={img}
            alt={text}
            sx={{
                height: "52.5px",
                width: "48.75px"
            }}
        />
        <Box sx={{color: fcolor, fontSize: '18px', fontWeight: fweight, pt:3}}>
            {text}
        </Box>
    </Box>
  )
}

export default SearchCard
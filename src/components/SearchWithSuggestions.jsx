import React from 'react';
import Box from '@mui/material/Box';
import SearchHospital from './SearchHospital';

function SearchWithSuggestions() {
  return (
    <Box sx={{ borderRadius:'10px', height:'429px', boxShadow:'6px 6px 35px 0px #1028511C', background:'#fff'
    }}>
        <Box>
            <SearchHospital />
        </Box>
        <Box sx={{color:'#102851', fontSize:'20px', fontWeight:'500'}}>
            You may be looking for
        </Box>
        <Box>

        </Box>
    </Box>
  )
}

export default SearchWithSuggestions
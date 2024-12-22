import Box  from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import BlogCard from './BlogCard';

function Blogs() {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column', // Stacks items vertically
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Box sx={{mt:5}}>
            <Typography variant="p" color="#2AA7FF">Blog & News</Typography>
            <Typography variant="h4" color="#1B3C74" fontWeight='600' fontSize='48px'>Read Our Latest News</Typography>
        </Box>
        <Box sx={{mt:5, mb:5, display:'flex', gap:5}}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </Box>
    </Box>
  )
}

export default Blogs
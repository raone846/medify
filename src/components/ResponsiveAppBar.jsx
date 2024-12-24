import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png'; // Import the logo image

const pages = ['Find Doctors', 'Hospitals', 'Medicines', 'Surgeries', 'Software for Provider', 'Facilities'];

function ResponsiveAppBar({ onPageSelect }) { // Accept a callback function as a prop
  const handlePageClick = (page) => {
    if (onPageSelect) {
      onPageSelect(page); // Call the callback with the selected page
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
        paddingLeft: "50px",
        paddingRight: "50px",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            onClick={() => handlePageClick("home")}
            sx={{
              height: "27px",
              width: "92px",
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              cursor: 'pointer'
            }}
          />

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', mr: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)} // Handle button click
                sx={{
                  my: 2,
                  mx: 1,
                  display: 'block',
                  color: 'black',
                  textTransform: 'none',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={() => handlePageClick("bookings")}
              sx={{
                background: '#2AA8FF',
                color: 'white',
                textTransform: 'none',
              }}
            >
              My Bookings
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

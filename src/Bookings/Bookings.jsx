import React from 'react';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import SearchHospital from '../components/SearchHospital';
import Add from '../assets/addd.png';

function Bookings() {
  return (
      <Box sx={{background:'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)'}}>
        <Box sx={{
          background:'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', 
          height:"100px", 
          borderEndEndRadius:"20px", 
          borderEndStartRadius:"20px",
          display:"flex",
          justifyContent:"left",
          alignItems:"center",
          color:"#fff",
          fontSize:"40px",
          fontWeight:"700",
          paddingLeft: 15
        }}>
          My Bookings
        </Box>
        <Box 
          width="85%" 
          sx={{
            background:"#fff",
            borderRadius:"10px",
            margin:"0 auto"
        }}>
          <SearchHospital />
        </Box>
        
        <Box sx={{
          width:"85%",
          margin:"0 auto",
          padding: "20px 0"
        }}>
          
          <Box width="100%" display="flex">
              <Box width="70%">

              </Box>
              <Box sx={{
                width:"363px",
                height:"268px",
                boxShadow: '0px 4px 4px 0px #00000040',
                overflow: 'hidden', // Ensures the image does not overflow
                position: 'relative', // Helps to manage image positioning
              }}>
                <Box
                  component="img" 
                  src={Add}
                  alt='Add'
                  sx={{
                    width:"235%",
                    height:"100%",
                    objectFit: "cover",
                  }}
                />
              </Box>  
          </Box>
        </Box>
      <DownloadApp />
      <Footer />
    </Box>
  )
}

export default Bookings
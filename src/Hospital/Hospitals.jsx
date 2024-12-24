import React from 'react';
import Box from '@mui/material/Box';
import Verified from '../assets/verified.png';
import FAQs from '../components/FAQs';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import Add from '../assets/addd.png';

function Hospitals() {
  return (
    <Box sx={{background:'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)'}}>
        <Box sx={{
          background:'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', 
          height:"100px", 
          borderEndEndRadius:"20px", 
          borderEndStartRadius:"20px"
        }}/>
        <Box sx={{
          width:"85%",
          margin:"0 auto",
          padding: "20px 0"
        }}>
          <Box>
            <label style={{textAlign:"left", fontSize:"24px", fontWeight:"500"}}>15 medical centers available in Alaska</label>
            <Box sx={{display:"flex", justifyContent:"left"}}>
                <Box 
                    component="img"
                    src={Verified}
                    alt="Verified"
                />
                <label style={{color:"#787887", marginLeft:"20px"}}>Book appointments with minimum wait-time & verified doctor details</label>
            </Box>
          </Box>
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
        <FAQs />
        <DownloadApp />
        <Footer />
    </Box>
  )
}
    
export default Hospitals
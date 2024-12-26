import React from 'react';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import SearchHospital from '../components/SearchHospital';
import Add from '../assets/addd.png';
import Hospital_Image from "../assets/Hospital_image.png";
import Success from "../assets/success.png";

function Bookings() {
  const hospitals_data = JSON.parse(localStorage.getItem('selectedBookings'));
  const hospitals = Object.values(hospitals_data);
  console.log(hospitals)

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
              {hospitals.map((hospital, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        margin: "10px 10px",
                        borderRadius:"20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          width: "124px",
                          height: "124px",
                          background: "#8CCFFF",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box component="img" src={Hospital_Image} alt="Hospital" sx={{ width: "80px", height: "80px" }} />
                      </Box>
                      <Box sx={{ flex: 1, marginLeft: "20px" }}>
                        <h2 style={{ color: "#14BEF0", fontSize: "20px", fontWeight: "600" }}>
                          {hospital.name}
                        </h2>
                        <p style={{ fontSize: "14px", color: "#414146", fontWeight: "700" }}>
                          {hospital.address}, {hospital.city}, {hospital.state}, {hospital.zipCode}
                        </p>
                        <p style={{color:"#414146"}}>Smilessence Center for Advanced Dentistry + 1 more</p>
                       
                        <Box component="img" src={Success} alt="Rating" />
                      </Box>
                      <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", gap:2}}>
                        <Box sx={{border:"1px solid #2AA7FF", color:"#2AA7FF", p:1}}>
                          {hospital.selectedTime}
                        </Box>
                        <Box sx={{border:"1px solid #00A500", color:"#007100", p:1}}>
                          {hospital.selectedDay}
                        </Box>
                      </Box>
                      
                    </Box>
                  </Box>
                ))}
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
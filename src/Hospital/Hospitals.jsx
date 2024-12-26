import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Verified from '../assets/verified.png';
import FAQs from '../components/FAQs';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import Add from '../assets/addd.png';
import SearchHospital from '../components/SearchHospital';
import Hospital_Image from '../assets/Hospital_image.png';

function Hospitals() {

  const location = useLocation();
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Extract query parameters
    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get("state");
    const city = queryParams.get("city");

    useEffect(() => {
        if (state && city) {
            setLoading(true);
            axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
                .then((response) => {
                    setHospitals(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching hospitals:", error);
                    setError("Failed to load hospitals. Please try again.");
                    setLoading(false);
                });
        }
    }, [state, city]);

  return (
    <Box sx={{background:'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)'}}>
        <Box sx={{
          background:'linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)', 
          height:"100px", 
          borderEndEndRadius:"20px", 
          borderEndStartRadius:"20px"
        }}/>

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
          <Box>
            <label style={{textAlign:"left", fontSize:"24px", fontWeight:"500"}}>{hospitals.length} medical centers available in {state}</label>
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
              <Box width="70%" sx={{mr:5}}>
              {loading ? (
                  <Box>Loading...</Box>
                ) : error ? (
                  <Box>{error}</Box>
                ) : (
                  <Box>
                    {hospitals.map((hospital, index) => (
                      <Box
                        key={index}
                        sx={{
                          border: "1px solid #ccc",
                          padding: "20px",
                          margin: "10px 0",
                          borderRadius: "10px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                          background: "#fff"
                        }}
                      >
                        <Box sx={{
                          width:"124px",
                          height:"124px",
                          background:"#8CCFFF",
                          borderRadius:"50%",
                          display:"flex",
                          justifyContent:"center",
                          alignItems:"center"
                        }}>
                          <Box 
                            component="img"
                            src={Hospital_Image}
                            alt="Hospital"
                            sx={{
                              width:"80px",
                              height:"80px"
                            }}
                          />
                        </Box>
                        
                        <h2>{hospital["Hospital Name"]}</h2>
                        <p>
                          <strong>Address:</strong> {hospital.Address}, {hospital.City},{" "}
                          {hospital.State}, {hospital["ZIP Code"]}
                        </p>
                        <p>
                          <strong>Overall Rating:</strong> {hospital["Hospital overall rating"]}
                        </p>
                      </Box>
                    ))}
                  </Box>
                )}

              </Box>
              <Box sx={{
                width:"363px",
                height:"268px",
                boxShadow: '0px 4px 4px 0px #00000040',
                overflow: 'hidden', // Ensures the image does not overflow
                position: 'relative', // Helps to manage image positioning
                borderRadius:"10px"
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
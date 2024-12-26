import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Verified from "../assets/verified.png";
import FAQs from "../components/FAQs";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import Add from "../assets/addd.png";
import SearchHospital from "../components/SearchHospital";
import Hospital_Image from "../assets/Hospital_image.png";
import Success from "../assets/success.png";
import PaginationTimeSlot from "../components/PaginationTimeSlot";

function Hospitals() {
  const location = useLocation();
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [booking, setBooking] = useState({});

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const state = queryParams.get("state");
  const city = queryParams.get("city");

  useEffect(() => {
    if (state && city) {
      setLoading(true);
      axios
        .get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
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

  const handleBookingClick = (index) => {
    setBooking((prev) => {
      const updatedBooking = { ...prev };
      updatedBooking[index] = !updatedBooking[index];
      return updatedBooking;
    });
  };

  const handleSelection = (day, time, hospital, index) => {
    // Retrieve existing bookings from localStorage or initialize as an empty object
    const existingBookings = JSON.parse(localStorage.getItem("selectedBookings")) || {};

    // Add or update the booking in the object using a unique key (e.g., hospital name)
    existingBookings[hospital["Hospital Name"]] = {
      name: hospital["Hospital Name"],
      address: hospital.Address,
      city: hospital.City,
      state: hospital.State,
      zipCode: hospital["ZIP Code"],
      selectedDay: day,
      selectedTime: time,
    };

    // Save the updated bookings object back to localStorage
    localStorage.setItem("selectedBookings", JSON.stringify(existingBookings));

    // Optionally, update local state to reflect the change
    setBooking((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(91.75deg, #2AA7FF 1.4%, #0C8CE6 100.57%)",
          height: "100px",
          borderEndEndRadius: "20px",
          borderEndStartRadius: "20px",
        }}
      />
      <Box width="85%" sx={{ background: "#fff", borderRadius: "10px", margin: "0 auto" }}>
        <SearchHospital />
      </Box>
      <Box sx={{ width: "85%", margin: "0 auto", padding: "20px 0" }}>
        <Box>
          <label style={{ textAlign: "left", fontSize: "24px", fontWeight: "500" }}>
            {hospitals.length} medical centers available in {state}
          </label>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <Box component="img" src={Verified} alt="Verified" />
            <label style={{ color: "#787887", marginLeft: "20px" }}>
              Book appointments with minimum wait-time & verified doctor details
            </label>
          </Box>
        </Box>
        <Box width="100%" display="flex">
          <Box width="70%" sx={{ mr: 5 }}>
            {loading ? (
              <Box>Loading...</Box>
            ) : error ? (
              <Box>{error}</Box>
            ) : (
              <Box>
                {hospitals.map((hospital, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        margin: "10px 0",
                        borderTopLeftRadius:"20px",
                        borderTopRightRadius:"20px",
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
                          {hospital["Hospital Name"]}
                        </h2>
                        <p style={{ fontSize: "14px", color: "#414146", fontWeight: "700" }}>
                          {hospital.Address}, {hospital.City}, {hospital.State}, {hospital["ZIP Code"]}
                        </p>
                        <p style={{color:"#414146"}}>Smilessence Center for Advanced Dentistry + 1 more</p>
                        <p style={{color:"#414146"}}><span style={{color:"#01A400"}}>FREE</span> <span style={{textDecoration:"line-through"}}>₹500</span> Consultation fee at clinic</p>
                        <Box component="img" src={Success} alt="Rating" />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <label style={{ textAlign: "center", color: "#01A400", fontSize: "14px", fontWeight: "500" }}>
                          Available Today
                        </label>
                        <button
                          style={{
                            padding: "10px 20px",
                            backgroundColor: booking[index] ? "#FF6347" : "#2AA7FF",
                            color: "#fff",
                            borderRadius: "5px",
                          }}
                          onClick={() => handleBookingClick(index)}
                        >
                          {booking[index] ? "Cancel Booking" : "Book FREE Center visit"}
                        </button>
                      </Box>
                    </Box>
                    <Box>
                    {booking[index] && (
                      <PaginationTimeSlot onSelect={(day, time) => handleSelection(day, time, hospital, index)} />
                    )}
                    </Box>
                    
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box
              sx={{
                width: "363px",
                height: "268px",
                boxShadow: "0px 4px 4px 0px #00000040",
                borderRadius: "10px",
                overflow: "hidden", // Ensures the image doesn't overflow
              }}
            >
              <Box
                component="img"
                src={Add}
                alt="Add"
                sx={{
                  width: "238%", // Match parent width
                  height: "100%", // Match parent height
                  objectFit: "cover", // Ensure the image scales and crops proportionally
                }}
              />
            </Box>

        </Box>
      </Box>
      <FAQs />
      <DownloadApp />
      <Footer />
    </Box>
  );
}

export default Hospitals;

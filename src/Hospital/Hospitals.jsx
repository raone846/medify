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
  const [booking, setBooking] = useState({}); // Track booking state for each hospital

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

  // Function to toggle booking state for each hospital
  const handleBookingClick = (index) => {
    setBooking((prev) => {
      const updatedBooking = { ...prev };
      updatedBooking[index] = !updatedBooking[index]; // Toggle the booking state for the specific hospital
      if (updatedBooking[index]) {
        // If booking is confirmed, save to localStorage and set visibility to false
        localStorage.setItem("selectedBooking", JSON.stringify({ ...updatedBooking }));
      }
      return updatedBooking;
    });
  };

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelection = (day, time, hospital) => {
    setSelectedDay(day);
    setSelectedTime(time);

    // Save the booking details to localStorage
    const bookingDetails = {
      hospitalName: hospital["Hospital Name"],
      address: hospital.Address,
      city: hospital.City,
      state: hospital.State,
      zipCode: hospital["ZIP Code"],
      selectedDay: selectedDay,
      selectedTime: selectedTime,
    };

    // Save the booking details in localStorage
    localStorage.setItem("selectedBooking", JSON.stringify(bookingDetails));

    // Once the booking is confirmed, set the booking visibility to false
    handleBookingClick(hospital.index);  // Set booking visibility to false after confirmation
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

      <Box
        width="85%"
        sx={{
          background: "#fff",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      >
        <SearchHospital />
      </Box>

      <Box
        sx={{
          width: "85%",
          margin: "0 auto",
          padding: "20px 0",
        }}
      >
        <Box>
          <label
            style={{
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
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
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Image Section */}
                      <Box
                        sx={{
                          width: "124px",
                          height: "124px",
                          background: "#8CCFFF",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Box
                          component="img"
                          src={Hospital_Image}
                          alt="Hospital"
                          sx={{
                            width: "80px",
                            height: "80px",
                          }}
                        />
                      </Box>

                      {/* Text Section */}
                      <Box sx={{ flex: 1, marginLeft: "20px" }}>
                        <h2
                          style={{
                            color: "#14BEF0",
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                          {hospital["Hospital Name"]}
                        </h2>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#414146",
                            fontWeight: "700",
                          }}
                        >
                          {hospital.Address}, {hospital.City}, {hospital.State},{" "}
                          {hospital["ZIP Code"]}
                        </p>
                        <p style={{ color: "#414146" }}>
                          Smilessence Center for Advanced Dentistry + 1 more
                        </p>
                        <p style={{ color: "#414146" }}>
                          <strong style={{ color: "#02A401" }}>FREE</strong>{" "}
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "#787887",
                            }}
                          >
                            ₹500
                          </span>{" "}
                          Consultation fee at clinic
                        </p>
                        <Box component="img" src={Success} alt="Rating" />
                      </Box>

                      {/* Button Section */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <label
                          style={{
                            textAlign: "center",
                            color: "#01A400",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          Available Today
                        </label>
                        <button
                          style={{
                            padding: "10px 20px",
                            backgroundColor: booking[index] ? "#FF6347" : "#2AA7FF",
                            color: "#fff",
                            border: "1px solid #14BEF0",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "600",
                          }}
                          onClick={() => handleBookingClick(index)}
                        >
                          {booking[index] ? "Cancel Booking" : "Book FREE Center visit"}
                        </button>
                      </Box>
                    </Box>
                    {booking[index] && (
                      <PaginationTimeSlot
                        onSelect={(day, time) => handleSelection(day, time, hospital)}
                      />
                    )}
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
              overflow: "hidden",
              position: "relative",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={Add}
              alt="Add"
              sx={{
                width: "238%",
                height: "100%",
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
  );
}

export default Hospitals;

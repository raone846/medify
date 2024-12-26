import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function PaginationTimeSlot({ onSelect }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);
  const date = new Date().toLocaleDateString("en-US", { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short' 
  }); 
  const [selectedDay, setSelectedDay] = useState(date);

  const generatePaginationLabels = (count) => {
    const labels = ["Today", "Tomorrow"];
    const now = new Date();
    for (let i = 2; i < count; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i);
      labels.push(date.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" }));
    }
    return labels;
  };

  const paginationLabels = generatePaginationLabels(7);

  const timeSlots = {
    Morning: ["11:00 AM"],
    Afternoon: ["12:00 PM", "12:30 PM","1:30 PM", "2:00 PM", "2:30 PM"],
    Evening: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    if (selectedTime) onSelect(day, selectedTime);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (selectedDay) onSelect(selectedDay, time);
  };

  return (
    <Box sx={{ 
      padding: "20px", 
      background: "#fff", 
      m:  -1.2, 
      width:"96%", 
      borderTop:"1px solid #F0F0F5",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
      ml:.1,
      mr:-3,
      borderBottomLeftRadius:"20px", 
      borderBottomRightRadius:"20px" 
    }}>
      {/* Day Buttons */}
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        {paginationLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(label)}
            style={{
              padding: "8px 16px",
              border: "none",
              backgroundColor: "white",
              color: "#414146",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            {label}
          </button>
        ))}
      </Stack>

      {/* Time Slot Sections */}
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
        {/* Morning Slot */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%", textAlign: "left" }}>
          <p style={{ fontWeight: "bold", color:"#414146" }}>Morning</p>
          {timeSlots.Morning.map((slot) => (
            <button
              key={slot}
              onClick={() => handleTimeClick(slot)}
              style={{
                padding: "8px 16px",
                border: "1px solid #2AA7FF",
                backgroundColor: "white",
                color: "#2AA7FF",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "400",
                marginBottom: "10px",
              }}
            >
              {slot}
            </button>
          ))}
        </Box>

        {/* Afternoon Slot */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%", textAlign: "center" }}>
          <p style={{ fontWeight: "bold", color:"#414146" }}>Afternoon</p>
          {timeSlots.Afternoon.map((slot) => (
            <button
              key={slot}
              onClick={() => handleTimeClick(slot)}
              style={{
                padding: "8px 16px",
                border: "1px solid #2AA7FF",
                backgroundColor: "white",
                color: "#2AA7FF",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "400",
                marginBottom: "10px",
              }}
            >
              {slot}
            </button>
          ))}
        </Box>
        
        {/* Evening Slot */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%", textAlign: "right" }}>
          <p style={{ fontWeight: "bold", color:"#414146" }}>Evening</p>
          {timeSlots.Evening.map((slot) => (
            <button
              key={slot}
              onClick={() => handleTimeClick(slot)}
              style={{
                padding: "8px 16px",
                border: "1px solid #2AA7FF",
                backgroundColor: "white",
                color: "#2AA7FF",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "400",
                marginBottom: "10px",
              }}
            >
              {slot}
            </button>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function PaginationTimeSlot({ onSelect }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 3]); // Tracks the range of pages to display
  const [selectedDay, setSelectedDay] = useState(null); // Track selected day
  const [selectedTime, setSelectedTime] = useState(null); // Track selected time slot

  // Function to generate pagination labels with Today, Tomorrow, and dates
  const generatePaginationLabels = (count) => {
    const labels = ["Today", "Tomorrow"];
    const now = new Date();
    for (let i = 2; i < count; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() + i);
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const dayAndMonth = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });
      labels.push(`${day}, ${dayAndMonth}`);
    }
    return labels;
  };

  const paginationLabels = generatePaginationLabels(7); // We generate 7 days of labels

  // Define time slots for different times of the day
  const timeSlots = {
    Morning: ["11:00 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
    Evening: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  };

  // Handler for page navigation
  const handlePageClick = (index) => {
    setCurrentPage(index + 1);
  };

  // Handle left and right navigation
  const handleLeftNavigation = () => {
    if (pageRange[0] > 1) {
      setPageRange([pageRange[0] - 3, pageRange[1] - 3]);
    }
  };

  const handleRightNavigation = () => {
    if (pageRange[1] < paginationLabels.length) {
      setPageRange([pageRange[0] + 3, pageRange[1] + 3]);
    }
  };

  // Handle the day selection
  const handleDayClick = (day) => {
    setSelectedDay(day);
    if (selectedTime) {
      onSelect(day, selectedTime); // Pass selected day and time to parent
    }
  };

  // Handle the time slot selection
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (selectedDay) {
      onSelect(selectedDay, time); // Pass selected day and time to parent
    }
  };

  return (
    <Box sx={{ padding: "20px", background: "#f9f9f9" }}>
      {/* Navigation buttons */}
      <Stack direction="row" spacing={2} sx={{ marginBottom: "20px", justifyContent: "center" }}>
        <Box
          onClick={handleLeftNavigation}
          sx={{
            padding: "10px 20px",
            cursor: pageRange[0] > 1 ? "pointer" : "not-allowed",
            backgroundColor: "#fff",
            color: "#2AA7FF",
            border: "1px solid #ccc",
            borderRadius: "45%",
            textAlign: "center",
          }}
        >
          {"<"}
        </Box>

        {/* Display the pagination labels */}
        <Box display="flex" justifyContent="center" gap="10px">
          {paginationLabels.slice(pageRange[0] - 1, pageRange[1]).map((label, index) => (
            <Box
              key={index}
              onClick={() => handlePageClick(pageRange[0] - 1 + index)}
              sx={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: currentPage === pageRange[0] - 1 + index + 1 ? "#14BEF0" : "#fff",
                color: currentPage === pageRange[0] - 1 + index + 1 ? "#fff" : "#000",
                border: "1px solid #ccc",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        <Box
          onClick={handleRightNavigation}
          sx={{
            padding: "10px 20px",
            cursor: pageRange[1] < paginationLabels.length ? "pointer" : "not-allowed",
            backgroundColor: "#fff",
            color: "#2AA7FF",
            border: "1px solid #ccc",
            borderRadius: "45%",
            textAlign: "center",
          }}
        >
          {">"}
        </Box>
      </Stack>

      {/* Time Slot Rows */}
      {Object.keys(timeSlots).map((timeOfDay) => (
        <Box key={timeOfDay} sx={{ marginBottom: "10px" }}>
          <h3 style={{ margin: 0, color: "#414146" }}>{timeOfDay}</h3>
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", color: "#2AA7FF" }}>
            {timeSlots[timeOfDay].map((slot, index) => (
              <Box
                key={index}
                onClick={() => handleTimeClick(slot)}
                sx={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  background: selectedTime === slot ? "#14BEF0" : "#fff",
                  color: selectedTime === slot ? "#fff" : "#000",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }}
              >
                {slot}
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      {/* Day Buttons */}
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {paginationLabels.slice(pageRange[0] - 1, pageRange[1]).map((day, index) => (
          <Box
            key={index}
            onClick={() => handleDayClick(day)}
            sx={{
              padding: "10px 20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: selectedDay === day ? "#14BEF0" : "#fff",
              color: selectedDay === day ? "#fff" : "#000",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {day}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

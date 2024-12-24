import React, { useState, useEffect } from 'react';
import { MenuItem, Select, Button, InputAdornment, Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function SearchHospital() {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({ state: "", city: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get(
                    "https://meddata-backend.onrender.com/states"
                );
                setStates(response.data);
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };
        fetchStates();
    }, []);

    useEffect(() => {
        const fetchCities = async () => {
            setCities([]);
            setFormData((prev) => ({ ...prev, city: "" }));
            try {
                const response = await axios.get(
                    `https://meddata-backend.onrender.com/cities/${formData.state}`
                );
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        if (formData.state) {
            fetchCities();
        }
    }, [formData.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.state && formData.city) {
            console.log("Search submitted:", formData);
            // Example navigation
            navigate(`/search?state=${formData.state}&city=${formData.city}`);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                gap: 4,
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                p: 2,
            }}
        >
            <Select
                displayEmpty
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                required
                sx={{ minWidth: 200, width: "100%" }}
            >
                <MenuItem disabled value="">
                    Select State
                </MenuItem>
                {states.map((state) => (
                    <MenuItem key={state} value={state}>
                        {state}
                    </MenuItem>
                ))}
            </Select>

            <Select
                displayEmpty
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                required
                sx={{ minWidth: 200, width: "100%" }}
            >
                <MenuItem disabled value="">
                    Select City
                </MenuItem>
                {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                        {city}
                    </MenuItem>
                ))}
            </Select>

            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{ py: "15px", px: 8, flexShrink: 0 }}
                disabled={!formData.state || !formData.city} // Dynamically enable or disable
            >
                Search
            </Button>
        </Box>
    );
}

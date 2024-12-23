import React from 'react';
import Box from '@mui/material/Box';
import SearchHospital from './SearchHospital';
import SearchCard from './SearchCard';
import Doctor from '../assets/Doctor.png';
import Capsule from '../assets/Capsule.png';
import Ambulance from '../assets/Ambulance.png';
import Hospital from '../assets/Hospital.png';
import DrugStore from '../assets/Drugstore.png';

function SearchWithSuggestions() {
  return (
    <Box sx={{ borderRadius:'10px', height:'429px', boxShadow:'6px 6px 35px 0px #1028511C', background:'#fff'
    }}>
        <Box>
            <SearchHospital />
        </Box>
        <Box sx={{color:'#102851', fontSize:'20px', fontWeight:'500', mt:7}}>
            You may be looking for
        </Box>
        <Box display='flex' justifyContent="space-between" sx={{m:3}}>
            <SearchCard img={Doctor} text="Doctors" brcolor="none" bgcolor="#FAFBFE" fcolor="#ABB6C7" fweight={400}/>
            <SearchCard img={DrugStore} text="Labs" brcolor="none" bgcolor="#FAFBFE" fcolor="#ABB6C7" fweight={400}/>
            <SearchCard img={Hospital} text="Hospital" brcolor="#2AA7FF" bgcolor="#2AA7FF14" fcolor="#2AA7FF" fweight={600}/>
            <SearchCard img={Capsule} text="Medical Store" brcolor="none" bgcolor="#FAFBFE" fcolor="#ABB6C7" fweight={400}/>
            <SearchCard img={Ambulance} text="Ambulance" brcolor="none" bgcolor="#FAFBFE" fcolor="#ABB6C7" fweight={400}/>
        </Box>
    </Box>
  )

}

export default SearchWithSuggestions
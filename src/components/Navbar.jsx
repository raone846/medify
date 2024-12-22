import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar';

function Navbar() {
  return (
    <div>
      <div style={{backgroundColor:'#2AA8FF', 
        color:"white", 
        height:"40px", 
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center"
        }}>
        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
      </div>
      <ResponsiveAppBar />
    </div>
  )
}

export default Navbar;
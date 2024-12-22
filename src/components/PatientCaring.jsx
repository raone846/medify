import React from 'react';
import Box from '@mui/material/Box';
import Pc1 from '../assets/pc-1.png';
import Pc2 from '../assets/pc-2.png';
import Typography from '@mui/material/Typography';
import Frame from '../assets/Frame.png';
import Phone from '../assets/phone.png';


function PatientCaring() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 3,
        height:'598px'
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: 'relative', 
          width: '332px', 
          height: '400px', 
          mt: -15
        }}
      >
        {/* First Image */}
        <Box
          component="img"
          src={Pc1}
          alt='Pc1'
          sx={{
            position: 'absolute',
            top: '20px',
            left: '300px',
            width: '332px',
            height: '275px',
            zIndex: 1, // Stack order
          }}
        />
        {/* Second Image */}
        <Box
          component="img"
          src={Pc2}
          alt='Pc2'
          sx={{
            position: 'absolute',
            top: '220px', // Offset to create the overlap
            left: '170px',
            width: '332px',
            height: '275px',
            zIndex: 1,
          }}
        />
        {/* Third Image */}
        <Box
          sx={{
            position: 'absolute',
            top: '80px', // Offset to create the overlap
            left: '100px',
            width: '235px',
            height: '86px',
            zIndex: 3,
            background: 'white',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column', // Stacks items vertically
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stacks items vertically
                    justifyContent: 'center',
                    alignItems: 'center', // Centers content horizontally
                    gap: 1, // Space between the two sections
                }}
            >
            {/* Image and First Text on the First Line */}
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center', // Aligns items vertically
                gap: 1, // Space between image and text
                }}
            >
                <Box
                component="img"
                src={Phone}
                alt="Phone"
                sx={{
                    width: '43px',
                    height: '34px',
                }}
                />
                <Typography variant="h7" sx={{ color: '#1B3C74' }}>
                Free Consultation
                </Typography>
            </Box>

            {/* Second Text on the Second Line */}
            <Typography
                variant="body2"
                sx={{
                color: '#77829D',
                textAlign: 'center', // Centers text horizontally
                }}
            >
                Consultation with the best
            </Typography>
            </Box>

        </Box>
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          ml: { md: 4 },
          maxWidth: '600px',
          textAlign: { xs: 'center', md: 'left' }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#2AA7FF',
            fontWeight: 500,
            mb: 2,
          }}
        >
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#1B3C74',
            fontWeight: 600,
            mb: 2,
          }}
        >
          Patient <span style={{ color: '#2AA7FF' }}>Caring</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#77829D',
            fontWeight: 500,
          }}
        >
          Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will
          allow us to care for you and strive to be the first and best choice for healthcare.
        </Typography>

        {/* New Flex Section for Frame and Text */}
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'flex-start', // Align all items to the left
                gap: 3, // Space between each image and text pair
                mt: 4, // Margin from the above section
            }}
            >
            {/* First Image and Text */}
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start', // Align items to the left
                gap: 2, // Space between image and text
                }}
            >
                <Box
                    component="img"
                    src={Frame}
                    alt="frame"
                    sx={{
                        width: '20px', // Adjust size as needed
                        height: '20px',
                    }}
                />
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#1B3C74',
                        fontWeight: 500,
                    }}
                >
                    Stay Updated About Your Health
                </Typography>
            </Box>

            {/* Second Image and Text */}
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start', // Align items to the left
                gap: 2,
                }}
            >
                <Box
                    component="img"
                    src={Frame}
                    alt="frame"
                    sx={{
                        width: '20px',
                        height: '20px',
                    }}
                />
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#1B3C74',
                        fontWeight: 500,
                    }}
                >
                    Check Your Results Online
                </Typography>
            </Box>

            {/* Third Image and Text */}
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'flex-start', // Align items to the left
                gap: 2,
                }}
            >
                <Box
                    component="img"
                    src={Frame}
                    alt="frame"
                    sx={{
                        width: '20px',
                        height: '20px',
                    }}
                />
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#1B3C74',
                        fontWeight: 500,
                    }}
                >
                    Manage Your Appointments
                </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PatientCaring;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Ensure the default Swiper CSS is loaded
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import Doc1 from '../assets/Doc1.png';
import Doc2 from '../assets/Doc2.png';
import Doc3 from '../assets/Doc3.png';
import Doc4 from '../assets/Doc4.png';
import Doc5 from '../assets/Doc5.png';
import { Pagination, Autoplay } from 'swiper/modules';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const images = [
    { label: 'Slide 1', imgPath: Doc1, name: "Dr. Lesley Hull", type:"Medicine" },
    { label: 'Slide 2', imgPath: Doc2, name: "Dr. Ahmad Khan", type:"Neurologist" },
    { label: 'Slide 3', imgPath: Doc3, name: "Dr. Heena Sachdeva", type:"Orthopadics" },
    { label: 'Slide 4', imgPath: Doc4, name: "Dr. Ankur Sharma", type:"Medicine" },
    { label: 'Slide 5', imgPath: Doc5, name: "Dr. Ahmad Stevens", type:"Neurologist" },
    { label: 'Slide 6', imgPath: Doc1, name: "Dr. Lesley Hull", type:"Medicine" },
    { label: 'Slide 7', imgPath: Doc2, name: "Dr. Ahmad Khan", type:"Neurologist" },
    { label: 'Slide 8', imgPath: Doc3, name: "Dr. Heena Sachdeva", type:"Orthopadics"  },
    { label: 'Slide 9', imgPath: Doc4, name: "Dr. Ankur Sharma", type:"Medicine" },
    { label: 'Slide 10', imgPath: Doc5, name: "Dr. Ahmad Stevens", type:"Neurologist" },
];

function SpecialistCarousal() {
    return (
        <Box>
            {/* Title */}
            <Typography
                variant="h4"
                sx={{
                    color: '#1B3C74',
                    fontWeight: 600,
                    pt: 4,
                    textAlign: 'center',
                }}
            >
                Our Medical Specialists
            </Typography>

            {/* Carousel */}
            <Box sx={{ mt: 4, mb: 10, mx: 5 }}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3.6}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        // Responsive behavior
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    background: 'white',
                                    boxShadow: '0px 15px 55px -10px rgba(0, 0, 0, 0.1)',
                                    borderTopLeftRadius: '50%',
                                    borderTopRightRadius: '50%',
                                    height: '414px', // Adjusted height
                                    width: '370px',
                                    mx: 'auto',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end', // Align content to the bottom
                                    alignItems: 'center',
                                    pb: 2,
                                }}
                            >
                                {/* Image Container */}
                                <Box
                                    sx={{
                                        background: 'linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)',
                                        borderTopLeftRadius: '50%',
                                        borderTopRightRadius: '50%',
                                        width: '350px',
                                        height: '394px',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-end', // Align image to the bottom
                                    }}
                                >
                                    <img
                                        src={image.imgPath}
                                        alt={image.label}
                                        style={{
                                            width: '90%',
                                            height: 'auto',
                                            objectFit: 'contain', // Maintain aspect ratio
                                        }}
                                    />
                                </Box>
                            </Box>
                            {/* Specialist Name */}
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 2,
                                    color: '#1B3C74',
                                    fontWeight: 500,
                                }}
                            >
                                {image.name}
                            </Typography>
                            <Typography
                                variant="h8"
                                sx={{
                                    mt: 2,
                                    color: '#2AA7FF',
                                    fontWeight: 500,
                                }}
                            >
                                {image.type}
                            </Typography>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default SpecialistCarousal;

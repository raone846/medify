import './OffersCarousel.css'; // Import the custom CSS file
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Ensure the default Swiper CSS is loaded
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import { Pagination, Autoplay } from 'swiper/modules';
import image1 from '../assets/image_cr1.png';
import image2 from '../assets/image_cr2.png';
import Box from '@mui/material/Box';

const images = [
    { label: 'Slide 1', imgPath: image1 },
    { label: 'Slide 2', imgPath: image2 },
    { label: 'Slide 3', imgPath: image1 },
    { label: 'Slide 4', imgPath: image2 },
    { label: 'Slide 5', imgPath: image1 },
    { label: 'Slide 6', imgPath: image1 },
    { label: 'Slide 7', imgPath: image2 },
    { label: 'Slide 8', imgPath: image1 },
    { label: 'Slide 9', imgPath: image2 },
];

function OffersCarousel() {
    return (
        <Box 
            sx={{
                m: 0, 
                p: 0, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '10vh', // Ensure Box takes full viewport height for vertical centering
            }}
        >
            <Swiper
                modules={[Pagination, Autoplay]} // Only include Pagination and Autoplay modules
                spaceBetween={30} // Adjust space between slides
                slidesPerView={3} // Display three slides at a time
                pagination={{ clickable: true }} // Enable clickable dots for pagination
                autoplay={{ delay: 3000 }} // Autoplay with 3-second delay
                loop={true} // Enable loop for infinite scrolling
                style={{
                    width: '80%', // Adjust the width of the Swiper to control its size
                    marginTop: '-300px'
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.imgPath}
                            alt={image.label}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                margin: '0 auto',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default OffersCarousel;

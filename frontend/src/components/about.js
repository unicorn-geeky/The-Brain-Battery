import React from 'react';
import { Box, Button, Typography, IconButton, Card, CardMedia, CardContent, Avatar, TextField, Link, CardActions, Chip, ImageList, ImageListItem, Container } from '@mui/material';
import Navbar from './navbar';
import { Grid } from '@mui/material'; // Import the stable Grid component



const About = () => {
    return (
        <Box>
            <Navbar />

            {/* Harness your potential */}
            <Box
                sx={{
                    height: '100vh', // Full height of the viewport
                    display: 'flex',
                    backgroundImage: `url(${require('../assets/section-about.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '0 40px',
                }}
            >
                {/* Left Text Section */}
                <Box
                    sx={{
                        maxWidth: '600px',
                        color: '#fff', // White text color
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '100px' }}>
                        HARNESS YOUR POTENTIAL
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                        10X Formulas was born out of a deep understanding of nutritional needs and a dedication
                        to improving people's daily performance through proper brain nourishment. Harness your
                        potential with 10X to tackle your day with confidence and clarity.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '15px' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ddd',
                                },
                            }}
                        >
                            LEARN MORE
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#fff',
                                color: '#fff',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#000',
                                },
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Our Mission and Vision */}
            <Box
                sx={{
                    height: '100vh', // Full height of the viewport
                    backgroundImage: `url(${require('../assets/section_mission.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '0 40px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {/* Grid Layout */}
                <Grid container alignItems="center" justifyContent="space-between">
                    {/* Left Text Section */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: '#fff', maxWidth: '600px' }}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                                OUR MISSION AND VISION
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                                10X Formulas creates pocket-sized nourishment that revitalises starved brains and powers go-getters around the clock.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '15px' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        padding: '10px 20px',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: '#ddd',
                                        },
                                    }}
                                >
                                    LEARN MORE
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#fff',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                        },
                                    }}
                                >
                                    SHOP NOW
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Image Section */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ maxWidth: '100%' }}>
                            <img
                                src={require('../assets/woman-image.png')} // Replace with the actual side image path
                                alt="Person holding a phone"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            {/* Journey to success */}
            <Box sx={{
                padding: '40px 20px',
                backgroundColor: '#f5f5f5', // Replace with your background image or color
                marginBottom:'20px'
            }}>
                {/* Title Section */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px'
                    }}>
                    <Box>
                        <Box>
                            <Box
                                sx={{
                                    borderTop: '10px solid #000', // Set border properties here
                                    width: '100%', // Ensure it spans the full width
                                    marginTop: '10px'
                                }}
                            />
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    color: '#000',
                                }}
                            >
                                OUR JOURNEY TO SUCCESS
                            </Typography>
                            <Box
                                sx={{
                                    borderBottom: '10px solid #000', // Set border properties here
                                    width: '100%', // Ensure it spans the full width
                                    marginBottom: '20px'
                                }}
                            />
                        </Box>

                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <img
                            src={require('../assets/brand-icon.png')}
                            style={{ height: '100px', padding: '20px 60px' }}
                        />
                    </Box>

                </Box>








                {/* Image with content */}
                <Box
                    sx={{
                        padding: '6%'
                    }}
                >
                    {/* First Image (timeline-item-1) */}
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100vh',
                            alignItems: 'center',
                            backgroundImage: `url(${require('../assets/timeline-item-1.png')})`, // First image
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'repeat',
                            position: 'relative',
                            zIndex: 3, // Ensures it's on top
                            marginBottom: '-20vh', // Overlap by 20% of viewport height
                        }}
                    >
                        <Box
                            sx={{
                                width: '45%',
                                color: '#fff',
                                margin: 5,
                                padding: '20px',
                                borderRadius: '8px',
                            }}
                        >
                            {/* Text Title */}
                            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                10X FORMULAS
                            </Typography>

                            {/* Text Content */}
                            <Typography variant="body1" paragraph>
                                10X Formulas was founded after 20 years of experience in the lifestyle coaching business by Kunal Gir, a prominent coach in India. Over two decades, Kunal trained thousands of people, including top celebrities, and identified a significant problem: nutritional deficiencies affecting people's mindsets. Recognizing that mindset is fundamental to everything, he decided to distill this knowledge into a convenient, effective solution accessible to everyone.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Second Image (timeline-item-2) */}
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100vh',
                            alignItems: 'center',
                            justifyContent: 'flex-end', // Align the text box to the right
                            backgroundImage: `url(${require('../assets/timeline-item-2.png')})`, // Second image
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            zIndex: 2, // Ensure it's behind the first image
                            marginBottom: '-20vh', // Overlap by 20% of viewport height
                        }}
                    >
                        {/* Right side text content */}
                        <Box
                            sx={{
                                width: '45%',
                                color: '#fff',
                                margin: 5,
                                padding: '20px',
                                borderRadius: '8px',
                            }}
                        >
                            {/* Text Title */}
                            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                KUNAL'S PREVIOUS VENTURES
                            </Typography>

                            {/* Text Content */}
                            <Typography variant="body1" paragraph>
                                Include owning supplement stores and developing a supplement line. However, he realized that most nutrients should come from whole foods. Despite this belief, the challenges posed by modern agriculture and depleted food supplies necessitated a product that could be consumed quickly.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Third Image (timeline-item-3) */}
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100vh',
                            alignItems: 'center',
                            backgroundImage: `url(${require('../assets/timeline-item-3.png')})`, // Third image
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'repeat',
                            position: 'relative',
                            zIndex: 1, // Ensure it's behind the first and second images
                            marginBottom: '-20vh', // Overlap by 20% of viewport height
                        }}
                    >
                        <Box
                            sx={{
                                width: '45%',
                                color: '#fff',
                                margin: 5,
                                padding: '20px',
                                borderRadius: '8px',
                            }}
                        >
                            {/* Text Title */}
                            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                10X FORMULAS - THIRD SECTION
                            </Typography>

                            {/* Text Content */}
                            <Typography variant="body1" paragraph>
                                This third section builds upon the achievements of the previous sections, showcasing the result of 10X's continuous innovation.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>


            {/* Catalyst,Excellence */}

            <Box
                sx={{
                    backgroundImage: `url(${require('../assets/section-backdrop.png')})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: '50px', // Add padding around the entire layout
                    backgroundColor: '#f5f5f5', // Replace with your background image or color

                }}
            >
                <Grid container spacing={4}>
                    {/* First Card - Catalyst */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                padding: '40px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow for depth
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img src={require('../assets/arrow-icon.png')} alt="Arrow Icon" style={{ width: '40px' }} /> {/* Replace with your icon */}
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        CATALYST
                                    </Typography>
                                    <Typography variant="body1">
                                        10X is the catalyst that empowers people to seize their day at their best.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Second Card - Excellence */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                padding: '40px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow for depth
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img src={require('../assets/arrow-icon.png')} alt="Arrow Icon" style={{ width: '40px' }} /> {/* Replace with your icon */}
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        EXCELLENCE
                                    </Typography>
                                    <Typography variant="body1">
                                        Life is a challenge, that's why people need a high-performance shot to stay at the top.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Third Card - Control */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                padding: '40px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow for depth
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img src={require('../assets/arrow-icon.png')} alt="Arrow Icon" style={{ width: '40px' }} /> {/* Replace with your icon */}
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        CONTROL
                                    </Typography>
                                    <Typography variant="body1">
                                        We believe in giving people control over their energy, their time, and their entire day.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Fourth Card - Potential */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                padding: '40px',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow for depth
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <img src={require('../assets/arrow-icon.png')} alt="Arrow Icon" style={{ width: '40px' }} /> {/* Replace with your icon */}
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        POTENTIAL
                                    </Typography>
                                    <Typography variant="body1">
                                        10X doesn’t just help you get through the day, it unlocks your potential every day.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>



        </Box>
    );
};

export default About;

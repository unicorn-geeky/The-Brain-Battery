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
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', marginTop:'100px' }}>
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
    <Box sx={{ padding: '40px 20px' }}>
      {/* Title Section */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'left',
          fontWeight: 'bold',
          marginBottom: '40px',
          color: '#000',
        }}
      >
        OUR JOURNEY TO SUCCESS
      </Typography>

      <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        backgroundImage: `url(${require('../assets/timeline-item-1.png')})`, // Your existing background image
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginBottom: 1,
      }}
    >
      <Box
        sx={{
          width: '45%', // Adjust width as needed to align the text
          color: '#fff',
          margin: 5,
        //   backgroundColor: 'rgba(0, 24, 72, 0.8)', // Semi-transparent background to match the blue box
          padding: '20px', // Add padding for inner spacing
          borderRadius: '8px', // Optional: if you want rounded corners
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
    </Box>

    </Box>
  );
};

export default About;

import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Card, CardMedia, CardContent, Avatar, TextField, Link, CardActions, Chip, ImageList, ImageListItem, Container } from '@mui/material';
import { Grid } from '@mui/material'; // Import the stable Grid component


const Footer = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${require('../assets/section-backdrop.png')})`,
                color: '#ffffff',
                padding: '40px',
                textAlign: 'left',
                marginTop: 'auto',
            }}
        >
            <Grid container spacing={4}>
                {/* 10X Branding */}
                <Grid item xs={12} md={3}>
                    <img src={require('../assets/Logo.png')} alt="Logo" />
                    <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            <i className="fa fa-linkedin"></i>
                        </Link>
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            <i className="fa fa-youtube"></i>
                        </Link>
                    </Box>
                </Grid>

                {/* Shop Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        SHOP
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Collection
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Power Up
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Power Down
                        </Link>
                    </Typography>
                </Grid>

                {/* About Section */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        ABOUT
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            About Us
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Blog
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            FAQ
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Contact
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Legal
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            Thank You
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                            404
                        </Link>
                    </Typography>
                </Grid>

                {/* Email List - Updated Design */}
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            width: '100%',
                            padding: '30px',
                            backgroundColor: '#174aaf',
                            borderRadius: '10px',
                            border: '2px solid #fff',
                            boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)',
                            textAlign: 'center',
                            marginLeft: '-50px',
                        }}
                    >
                        <Typography variant="h6" sx={{ color: '#fff', marginBottom: '20px' }}>
                            JOIN THE EMAIL LIST
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <TextField
                                variant="outlined"
                                placeholder="Enter name"
                                InputProps={{
                                    sx: {
                                        backgroundColor: '#fff',
                                        borderRadius: '5px',
                                    },
                                }}
                            />
                            <TextField
                                variant="outlined"
                                placeholder="Enter Email"
                                InputProps={{
                                    sx: {
                                        backgroundColor: '#fff',
                                        borderRadius: '5px',
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: '10px',
                                    backgroundColor: '#174aaf',
                                    borderRadius: '30px',
                                    color: '#fff',
                                    padding: '10px 20px',
                                    fontWeight: 'bold',
                                    boxShadow: '0px 0px 10px #001848',
                                    position: 'relative',
                                    '&:hover': {
                                        backgroundColor: '#002970',
                                    },
                                    '&::after': {
                                        display: 'inline-block',
                                        marginLeft: '10px',
                                        fontSize: '18px',
                                    },
                                }}
                            >
                                SUBMIT
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Bottom */}
            <Box sx={{ borderTop: '1px solid #006', marginTop: '20px', paddingTop: '20px' }}>
                <Typography variant="body2">&copy; 2024 10X. All rights reserved.</Typography>
                <Box sx={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                    <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                        Privacy Policy
                    </Link>
                    <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                        Terms of Service
                    </Link>
                    <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                        Cookies Settings
                    </Link>
                </Box>
            </Box>
        </Box>

    )
}
export default Footer;




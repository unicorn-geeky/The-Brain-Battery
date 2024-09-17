import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Card, CardMedia, CardContent, Avatar, TextField, Link, CardActions, Chip, ImageList, ImageListItem, Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Grid } from '@mui/material'; // Import the stable Grid component
import UnionImage1 from '../assets/Union-1.png'; // Import the image from the relative path
import UnionImage2 from '../assets/Union-2.png'; // Import the image from the relative path
import UnionImage3 from '../assets/Union-3.png'; // Import the image from the relative path
import limeImage1 from '../assets/Lime 1 (1).png'
import limeImage2 from '../assets/Lime.png'
import limeImage3 from '../assets/Lime-2.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import powerVector from '../assets/power-Vector.png'
import lightVector from '../assets/Vector.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Footer from './footer';
import Slider from 'react-slick';





const itemsPerPage = 4;  // Number of items per page

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState({ img1: false, img2: false, img3: false });
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    { name: 'Lime', price: 55, image: limeImage1, variant: 'Variant' },
    { name: 'Mango', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Blister Pack', price: 55, image: limeImage3, variant: 'Variant' },
    { name: 'Canister', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Lime', price: 55, image: limeImage1, variant: 'Variant' },
    { name: 'Mango', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Blister Pack', price: 55, image: limeImage3, variant: 'Variant' },
    { name: 'Canistttttttttter', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Lime', price: 55, image: limeImage1, variant: 'Variant' },
    { name: 'Mannnnnnnnngo', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Blister Pack', price: 55, image: limeImage3, variant: 'Variant' },
    { name: 'Canister', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Lime', price: 55, image: limeImage1, variant: 'Variant' },
    { name: 'Mango', price: 55, image: limeImage2, variant: 'Variant' },
    { name: 'Blister Pack', price: 55, image: limeImage3, variant: 'Variant' },
    { name: 'Canistttttttttter', price: 55, image: limeImage2, variant: 'Variant' },
  ];

  // Calculate the start and end index for products to display on current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };


  const imageStyle = (hover) => ({
    maxWidth: '100%',
    height: '500px',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    transform: hover ? 'scale(1.1)' : 'scale(1)',
    cursor: 'pointer',
  });

  const iconTextArray = [
    { image: require('../assets/logo_1.png') },
    { image: require('../assets/logo_2.png') },
    { image: require('../assets/logo_1.png') },
    { image: require('../assets/logo_2.png') },
    { image: require('../assets/logo_1.png') },
    { image: require('../assets/logo_2.png') }
  ];

    // Slick carousel settings
    const settings = {
      dots: true, // Dots for navigation
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 6, // Show 4 images at a time
      slidesToScroll: 1, // Scroll 1 image at a time
      autoplay: true, // Optional: auto move
      autoplaySpeed: 1000, // Speed of auto move
      responsive: [
        {
          breakpoint: 768, // Breakpoint for smaller screens (tablets)
          settings: {
            slidesToShow: 2, // Show 2 images at a time
            slidesToScroll: 1,
            infinite: true,
            dots: true

          }
        },
        {
          breakpoint: 480, // Breakpoint for mobile screens
          settings: {
            slidesToShow: 1, // Show 1 image at a time
            slidesToScroll: 1
          }
        }
      ]
    };

    
  const testimonials = [
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    {
      name: 'Name Surname',
      position: 'Position, Company name',
      companyLogo: 'webflow-logo-url', // replace with actual URL
      avatar: 'avatar-url', // replace with actual URL
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  const testimonialsPerPage = 3; // Show 3 testimonials at once
  const totalTestimonialPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);

  // Get the testimonials to display on the current page
  const displayedTestimonials = testimonials.slice(
    currentTestimonialPage * testimonialsPerPage,
    (currentTestimonialPage + 1) * testimonialsPerPage
  );

  // Handle previous page
  const handlePrevTestimonialPage = () => {
    if (currentTestimonialPage > 0) {
      setCurrentTestimonialPage(currentTestimonialPage - 1);
    }
  };

  // Handle next page
  const handleNextTestimonialPage = () => {
    if (currentTestimonialPage < totalTestimonialPages - 1) {
      setCurrentTestimonialPage(currentTestimonialPage + 1);
    }
  };

  // Handle page change from dots
  const handleTestimonialPageChange = (index) => {
    setCurrentTestimonialPage(index);
  };


  const blogPosts = [
    {
      title: 'THE POWER OF AYURVEDIC HERBS',
      description: 'Learn how Ayurvedic herbs can improve your health',
      category: 'Health',
      readTime: '5 min read',
      image: require('../assets/blogs.png'), // Replace with the correct image path
      readMoreLink: '#',
    },
    {
      title: '10 TIPS FOR A HEALTHY LIFESTYLE',
      description: 'Discover simple ways to improve your overall well-being',
      category: 'Health',
      readTime: '5 min read',
      image: require('../assets/blogs.png'), // Replace with the correct image path
      readMoreLink: '#',
    },
    {
      title: '10 TIPS FOR A HEALTHY LIFESTYLE',
      description: 'Discover simple ways to improve your overall well-being',
      category: 'Health',
      readTime: '5 min read',
      image: require('../assets/blogs.png'), // Replace with the correct image path
      readMoreLink: '#',
    },
  ];


  const socialMediaPosts = [
    {
      username: '@username_placeholder',
      image: require('../assets/man-image.png'), // Replace with the correct image path
    },
    {
      username: '@username_placeholder',
      image: require('../assets/woman-image.png'), // Replace with the correct image path
    },
    {
      username: '@username_placeholder',
      image: require('../assets/man-image.png'), // Replace with the correct image path
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          backgroundImage: `url(${require('../assets/section_hero.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
        }}
      >
        <Box
          sx={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#fff' }}>
            10X
          </Typography>
          <Box>
            <IconButton sx={{ color: '#fff' }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <PersonIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Add a line (border) after the navbar */}
        <Box
          sx={{
            borderTop: '2px solid #fff', // Set border properties here
            width: '100%', // Ensure it spans the full width
          }}
        />

        {/* Hero Section */}
        <Box sx={{ padding: '90px' }}>
          <Typography
            variant="h1"
            sx={{
              width: '600px',
              fontWeight: '600',
              color: '#fff',
              lineHeight: '90px',
            }}
          >
            THE BRAIN BATTERY
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              margin: '20px 0',
              color: '#fff',
              width: '600px',
              lineHeight: '20px',
            }}
          >
            POCKET-SIZED NOURISHMENT THAT REVITALIZES STARTED BRAINS AROUND THE
            GLOBE.
          </Typography>
          <Button
              variant="outlined"
              sx={{
                height:'40px',
                marginTop: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px', // Add padding to make the button wider
                border: '2px solid #fFF', // Blue border
                borderRadius: '5px', // Rounded corners
                backgroundColor: '#000', // White background
                color: '#fff', // Blue text color
                fontWeight: 'bold', // Bold text
                fontSize: '16px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow effect
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Slightly darker on hover
                  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
                },
                position: 'relative', // Allows the image to be positioned over the button
              }}
              onClick={() => {
                // Handle the button click
                console.log('Button clicked');
              }}
            >
              <img
                src={require('../assets/Lime-2.png')}
                alt="product"
                style={{
                  width: 60,
                  position: 'absolute',
                  left: '-30px', // Position the image to the left of the button
                  transform: 'rotate(-15deg)', // Add a slight rotation to the image
                }}
              />
              SHOP NOW
            </Button>
        </Box>
      </Box>

      {/* Available At Section */}
      <Box
      sx={{
        backgroundColor: '#f5f5f5', // Replace with your background image or color
        padding: '40px 20px',
        textAlign: 'center',
        border: '2px solid #fff', // Optional: border like in the screenshot
        paddingBottom:'80px'
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '60px', marginTop:'15px' }}>
        AVAILABLE AT
      </Typography>

      {/* Slider Section */}
      <Slider {...settings}>
        {iconTextArray.map((item, index) => (
          <Box key={index} sx={{ padding: '0 10px' }}>
            <img
              src={item.image}
              alt={`Image ${index}`}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>

      {/* Benefits of 10X Section */}
      <Box
        sx={{

          backgroundImage: `url(${require('../assets/section-backdrop.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: '#fff',
          padding: '40px 0',
        }}
      >
        <Container>
          {/* Title Section */}
          <Box sx={{ textAlign: 'left', marginTop: 4, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
            {/* Add a line (border) after the navbar */}
            <Box>
              <Box
                sx={{
                  borderTop: '10px solid #fff', // Set border properties here
                  width: '100%', // Ensure it spans the full width
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFFFFF', maxWidth: '400px', marginTop: 1, marginBottom: 1 }}>
                BENEFITS OF 10X
              </Typography>
              <Box
                sx={{
                  borderBottom: '10px solid #fff', // Set border properties here
                  width: '100%', // Ensure it spans the full width
                }}
              />
            </Box>
            <Typography sx={{ maxWidth: '600px' }}>
              With ZERO calories and ZERO sugar, 10X is an indispensable asset for those who want to plug into their maximum potential and harness every ounce of it in a healthy way. And we deliver within 60 minutes of your purchase!
            </Typography>
          </Box>

          {/* Grid Section for the content */}
          <Grid container spacing={4}>
            {/* First Column */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={UnionImage1}
                  alt="Powerhouse of Rejuvenation"
                  style={imageStyle(isHovered.img1)}
                  onMouseEnter={() => setIsHovered({ ...isHovered, img1: true })}
                  onMouseLeave={() => setIsHovered({ ...isHovered, img1: false })}
                />
                <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                  POWERHOUSE OF REJUVENATION
                </Typography>
                <Typography>
                  Whether it’s invigoration for your busy day or the wind down at night so you can rest and recharge, 10X amplifies nourishment for peak performance. It’s rapid nourishment for a starving brain.
                </Typography>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={UnionImage2}
                  alt="The Winner's Shot"
                  style={imageStyle(isHovered.img2)}
                  onMouseEnter={() => setIsHovered({ ...isHovered, img2: true })}
                  onMouseLeave={() => setIsHovered({ ...isHovered, img2: false })}
                />
                <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                  THE WINNER’S SHOT
                </Typography>
                <Typography>
                  It’s an essential boost in an easy-to-carry, convenient pack that doesn’t need refrigeration and fits in a pocket for high flyers, go-getters, and people outworking the competition.
                </Typography>
              </Box>
            </Grid>

            {/* Third Column */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={UnionImage3}
                  alt="Energy You Can Control"
                  style={imageStyle(isHovered.img3)}
                  onMouseEnter={() => setIsHovered({ ...isHovered, img3: true })}
                  onMouseLeave={() => setIsHovered({ ...isHovered, img3: false })}
                />
                <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                  ENERGY YOU CAN CONTROL
                </Typography>
                <Typography>
                  Forget nervous, jittery, unsteady energy that’s explosive and puts you in a briefly heightened state. 10X is collected, expansive energy that your brain can regulate all day and night.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Take charge Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundImage: `url(${require('../assets/section-single-product.png')})`,
          padding: '50px',
          height: '100vh',
          backgroundRepeat: 'no-repeat',

        }}
      >
        {/* Left Side: Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 'bold', color: '#000', lineHeight: '1.2' }}
          >
            TAKE CHARGE.<br />
            OWN THE DAY.
          </Typography>
          <Typography sx={{ marginTop: 2, color: '#000', maxWidth: '500px' }}>
            10X is the winner’s shot. A compact, pocket-sized essential that keeps high performers switched on to seize the day, and regenerates cells during the night for a refreshed wake up. It's essential for those who desire to regain control of their energy and maximize their ROI.
          </Typography>
          {/* Button */}
          <Box sx={{ marginTop: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0000FF',
                color: '#fff',
                padding: '10px 20px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#0000A0',
                },
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </Box>

        {/* Right Side: Image */}
        {/* <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            // src={require('../assets/section-single-product.png')} // Replace with the actual path of your can image
            alt="10X Can"
            // style={{ height: '400px' }}
          />
        </Box> */}
      </Box>

{/* Collection */}
      <Box sx={{ padding: '20px' }}>
        {/* Collection Header */}
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          COLLECTION
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Take a look at our expansive collection.
        </Typography>

        {/* Product Grid */}
        <Grid container spacing={4} justifyContent="center">
          {paginatedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.variant}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" fullWidth>
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Controls with Chevron */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <IconButton onClick={handlePrev} disabled={currentPage === 0}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={handleNext} disabled={endIndex >= products.length}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>


{/* About 10X */}
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          backgroundImage: `url(${require('../assets/section-about.png')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginBottom: 1
        }}
      >
        <Box
          sx={{
            width: '44%', // Adjust width as needed
            color: '#fff', // White text color
            margin: 5
          }}
        >
          <Typography variant="h3" gutterBottom>
            ABOUT 10X
          </Typography>
          <Typography variant="body1" paragraph>
            Our product is the result of 20 years of research and hands-on experience. We've engineered 10X with critical ingredients that cross the blood-brain barrier to optimize brain function. A well-nourished brain enhances focus, clarity, and energy, benefiting all aspects of daily life, whether it's a workout, a business meeting, or spending quality time with family.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Box>

                <img
                  src={lightVector}
                  style={{ height: '50px', padding: '20px 60px', }}
                />
                <Typography variant="h6">TAKE CONTROL</Typography>
                <Typography variant="body2">
                  You'll enjoy controllable energy and rejuvenating nourishment in one easy sip.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <img
                  src={powerVector}
                  style={{ height: '50px', padding: '20px 60px', }}
                />
                <Typography variant="h6">KEEP GOING</Typography>
                <Typography variant="body2">
                  10X is like a battery for your brain. It keeps you focused for longer to unleash your true potential.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: '80px' }}>
            <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
              SHOP NOW
            </Button>
            <Button variant="outlined" color="primary">
              SEE ALL
            </Button>
          </Box>
        </Box>
      </Box>

{/* Happy Customer */}
      <Box sx={{ padding: '40px' }}>
        {/* Header Section */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            HAPPY CUSTOMERS
          </Typography>
          <Typography variant="body1">
            Hear what our satisfied customers have to say
          </Typography>
        </Grid>

        {/* Testimonials Section */}
        <Grid container spacing={3} sx={{ marginTop: '20px' }}>
          {displayedTestimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  {/* Stars */}
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <StarIcon key={idx} sx={{ color: '#fbc02d' }} />
                    ))}
                  </Box>

                  {/* Testimonial Feedback Text */}
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    "{testimonial.feedback}"
                  </Typography>

                  {/* Testimonial Avatar and Details */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="body1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Testimonial Company Logo */}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <img
                      src={testimonial.companyLogo}
                      alt="company-logo"
                      style={{ width: 80 }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Testimonial Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          {Array.from({ length: totalTestimonialPages }).map((_, index) => (
            <IconButton
              key={index}
              onClick={() => handleTestimonialPageChange(index)}
              sx={{ color: currentTestimonialPage === index ? '#000' : '#ccc' }}
            >
              <FiberManualRecordIcon fontSize="small" />
            </IconButton>
          ))}
        </Box>

        {/* Testimonial Arrow Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <IconButton onClick={handlePrevTestimonialPage} disabled={currentTestimonialPage === 0}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={handleNextTestimonialPage} disabled={currentTestimonialPage === totalTestimonialPages - 1}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>


      <Box
        sx={{
          height: '400px', // Adjust height as needed
          backgroundImage: `url(${require('../assets/section_cta-final.png')})`, // Use your background image
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container sx={{ padding: '40px' }} alignItems="center">
          {/* Left side text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }}>
              DISCOVER OUR COLLECTION OF PRODUCTS
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', mb: 3 }}>
              Experience the 10X difference with our expansive range.
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
              SHOP NOW
            </Button>
            <Button variant="outlined" color="primary">
              SEE ALL
            </Button>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
            <img
              src={limeImage1} // Replace with the actual product image
              alt="Product"
              style={{ maxWidth: '100%', height: '400px', marginRight: '20px' }}
            />

          </Grid>
        </Grid>
      </Box>


      <Box sx={{ padding: '30px', backgroundColor: '#E6E6E6' }}>
        {/* Blog Header */}
        <Box sx={{ marginBottom: '40px' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            BLOGS
          </Typography>
          <Typography variant="body1">Stay informed with our latest blog posts.</Typography>
        </Box>

        {/* Blog Posts */}
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  {/* Category and Read Time */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Chip
                      label={post.category}
                      sx={{
                        backgroundColor: post.category === 'Health' ? '#4caf50' : '#9c27b0',
                        color: '#fff',
                        fontWeight: 'bold',
                        mr: 1,
                      }}
                    />
                    <Typography variant="body2">{post.readTime}</Typography>
                  </Box>

                  {/* Blog Title */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {post.title}
                  </Typography>

                  {/* Blog Description */}
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {post.description}
                  </Typography>

                  {/* Read More Link */}
                  <Button href={post.readMoreLink} sx={{ textTransform: 'none' }}>
                    READ MORE &nbsp; &gt;
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="outlined" sx={{ padding: '10px 30px', fontWeight: 'bold' }}>
            VIEW ALL
          </Button>
        </Box>
      </Box>


      <Box sx={{ padding: '40px', display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={4}>
          {/* Left Side */}
          <Grid item xs={12} md={5}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              FOLLOW US ON SOCIALS
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 20px', // Add padding to make the button wider
                border: '2px solid #0000FF', // Blue border
                borderRadius: '5px', // Rounded corners
                backgroundColor: '#fff', // White background
                color: '#0000FF', // Blue text color
                fontWeight: 'bold', // Bold text
                fontSize: '16px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow effect
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Slightly darker on hover
                  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
                },
                position: 'relative', // Allows the image to be positioned over the button
              }}
              onClick={() => {
                // Handle the button click
                console.log('Button clicked');
              }}
            >
              <img
                src={require('../assets/Lime-2.png')}
                alt="product"
                style={{
                  width: 60,
                  position: 'absolute',
                  left: '-30px', // Position the image to the left of the button
                  transform: 'rotate(-15deg)', // Add a slight rotation to the image
                }}
              />
              CHECK OUT OUR SOCIALS
            </Button>


          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Left Chevron */}
              <IconButton sx={{ marginRight: 2 }}>
                <ChevronLeftIcon fontSize="large" />
              </IconButton>

              {/* Social Media Cards */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialMediaPosts.map((post, index) => (
                  <Card key={index} sx={{ width: 200, position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={post.image}
                      alt="Social Post"
                    />
                    <Box sx={{ position: 'absolute', top: 10, left: 10 }}>
                      <Typography variant="body2" color="#fff">
                        {post.username}
                      </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                      <PlayCircleFilledWhiteIcon sx={{ fontSize: 40, color: '#fff' }} />
                    </Box>
                  </Card>
                ))}
              </Box>

              {/* Right Chevron */}
              <IconButton sx={{ marginLeft: 2 }}>
                <ChevronRightIcon fontSize="large" />
              </IconButton>
            </Box>

            {/* Pagination Dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Box sx={{ height: 10, width: 10, backgroundColor: '#7c4dff', borderRadius: '50%', margin: 1 }} />
              <Box sx={{ height: 10, width: 10, backgroundColor: '#ccc', borderRadius: '50%', margin: 1 }} />
              <Box sx={{ height: 10, width: 10, backgroundColor: '#ccc', borderRadius: '50%', margin: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Footer />
    </Box>
  );
};

export default LandingPage;

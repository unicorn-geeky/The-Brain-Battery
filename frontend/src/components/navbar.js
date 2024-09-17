import React from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

// Import the background image
const backgroundImage = require('../assets/Navbar.png'); // Update with the correct path

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderBottom:'2px solid #fff',
        // border: '2px solid #9b59b6', // Optional: border for the outline
        boxShadow: '0px 0px 10px rgba(155, 89, 182, 0.8)', // Optional: to add glow effect
      }}
    >
      {/* Left Section - Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={require('../assets/Logo.png')} // Replace with the logo image path
          alt="10X Logo"
          style={{ height: '40px' }} // Adjust the size as needed
        />
      </Box>

      {/* Right Section - Icons */}
      <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <IconButton>
          <SearchIcon sx={{ color: '#fff', fontSize: '28px' }} />
        </IconButton>
        <IconButton>
          <PersonIcon sx={{ color: '#fff', fontSize: '28px' }} />
        </IconButton>
        <IconButton>
          <ShoppingCartIcon sx={{ color: '#fff', fontSize: '28px' }} />
        </IconButton>
        <IconButton>
          <MenuIcon sx={{ color: '#fff', fontSize: '28px' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;

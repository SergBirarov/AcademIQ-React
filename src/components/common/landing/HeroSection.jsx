import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Box component="img" src="https://academiq-assets.s3.eu-north-1.amazonaws.com/academiq-logo.png" alt="logo" sx={{
        width: { xs: '300px', sm: '500px', md: '600px' },
      }}/>
      <Typography variant="h1">Welcome to AcademIQ</Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Empowering Education for the Future
      </Typography>
    </Box>
  );
};

export default HeroSection;

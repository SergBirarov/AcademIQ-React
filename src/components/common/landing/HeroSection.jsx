import React from 'react';
import { Box, lighten, Typography, Grid2 } from '@mui/material';
import { GetVw, GetVh, GetResponsiveFontSize } from '../../../utils/GeneralHelpers';
import { m } from 'framer-motion';
import LandingButton from './LandingButton';

import Divider from '@mui/material/Divider';


const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Grid2 container sx={{ justifyContent: 'center' }}>
        <Grid2 item xs={12} sm={6} sx={{ alignContent: { xs: 'center', sm: 'left' } }}>
      <Box component="img" src="https://academiq-assets.s3.eu-north-1.amazonaws.com/academiq-logo.png" alt="logo" sx={{
        width: { xs: `${GetVw(400)}`, sm: `${GetVw(500)}`, md: `${GetVw(400)}` },
      }}/>
      </Grid2>
      <Grid2 item xs={12} sm={6} sx={{ alignContent: { xs: 'center', sm: 'left' } }}>
      <Box 
      sx={{
         marginLeft: 5,
        marginTop: { xs: 5, sm: 0 },
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        color: 'primary.contrastText',
        verticalAlign: 'middle',
         }}>
      <Typography variant="h1">Welcome to Academ<span style={{ color: lighten('#FF7F50', 0.5) }}>IQ</span> </Typography>
      <Typography variant="h3" sx={{ marginTop: -3 }}>
        Empowering Education for the Future</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>Harnest your learning with our dedicated learing management system.</Typography>
      </Box>
      </Grid2>
      </Grid2>
    </Box>
  );
};

export default HeroSection;

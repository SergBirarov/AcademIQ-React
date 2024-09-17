import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Grid2, Box, Typography, Paper } from '@mui/material';
import HeroSection from '../components/common/landing/HeroSection';
import LandingButton from '../components/common/landing/LandingButton';


const Section = ({ children, animation }) => (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: 'inherit',
      }}
      data-aos={animation} 
    >
      <Grid2
        container
        spacing={4}
        sx={{
          maxWidth: 'lg',
          alignItems: 'center',
        }}
      >
        {children}
      </Grid2>
    </Box>
  );

  /**
   * Box - בשביל כל 
   * grid container
   * Grid2 item - בשביל כל 
   * תוכן 
   * Grid
  * 
   * 
   */
  

  
const LandingPage = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: false, 
          easing: 'ease-in-out',
        });
      }, []);


  return (
    <Box
      component="main"
      className='landing-page-background'
      sx={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
    <Section animation="fade-up">
    <HeroSection />
    </Section>

    <Section animation="fade-right">
      
      <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Manage Your Courses Effectively
          </Typography>
<Box
        component="img"
        src="https://academiq-assets.s3.eu-north-1.amazonaws.com/landing1.png"
        alt="Manage Courses"
        className='landing-svg'
      />
    </Section>

    <Section animation="fade-left">
    <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/landing2.png"
            alt="Collaborate"
            className='landing-svg'
          />
          <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Collaborate and Learn Seamlessly
          </Typography>
           
    </Section>

    <Section animation="fade-up">
    <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/landing3.png"
            alt="Join Community"
            className='landing-svg'
          />
          <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Join Our Community
          </Typography>
          <LandingButton />
    </Section>
    </Box>
  );
};

export default LandingPage;

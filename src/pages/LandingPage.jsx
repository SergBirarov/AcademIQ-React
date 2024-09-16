import React from 'react';
import {Grid2, Box, Typography, Paper } from '@mui/material';
import SvgSection from '../components/common/landing/SvgSection'; // Import the SvgSection component


const Section = ({ children, bgColor, animation }) => (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor,
        padding: 4,
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
  

  
const LandingPage = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true, 
        });
      }, []);


  return (
    <>
      <Section bgColor="#003366" animation="fade-up">
        <Grid2 item xs={12} md={6}>
          <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/welcome.svg"
            alt="Welcome"
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Typography variant="h1" color="white" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Welcome to AcademIQ
          </Typography>
        </Grid2>
      </Section>

      <Section bgColor="#FFFFFF" animation="fade-right">
        <Grid2 item xs={12} md={6}>
          <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/time_landing.gif"
            alt="Manage Courses"
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Manage Your Courses Effectively
          </Typography>
        </Grid2>
      </Section>

      <Section bgColor="#40E0D0" animation="fade-left">
        <Grid2 item xs={12} md={6}>
          <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/inside_landing.gif"
            alt="Collaborate"
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Collaborate and Learn Seamlessly
          </Typography>
        </Grid2>
      </Section>

      <Section bgColor="#FF7F50" animation="fade-up">
        <Grid2 item xs={12} md={6}>
          <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/studentA_landing.gif"
            alt="Join Community"
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Typography variant="h2" color="text.primary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            Join Our Community
          </Typography>
        </Grid2>
      </Section>
    </>
  );
};

export default LandingPage;

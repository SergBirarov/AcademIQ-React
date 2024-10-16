import React from 'react';
import { Box, Container, Typography, Grid2, Link } from '@mui/material';
import styled from '@emotion/styled';

const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'block',
  padding: theme.spacing(3),
  bottom: 0,
  position: 'static',
  backgroundColor: theme.palette.background.default,
}));


const Footer = () => {
  return (
    <BoxStyled>
<Box>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item xs={12} sm={6} display="flex" alignItems="center">
            <Box component="img" src={"https://academiq-assets.s3.eu-north-1.amazonaws.com/Academiq-title.png"} sx={{
              width: '10rem',
              height: 'auto',
              marginRight: '1rem',
            }} />
          </Grid2>
          <Grid2 item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'right' }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} AcademIQ. All rights reserved.
            </Typography>
            <Typography variant="body2">
              <Link href="/privacy-policy" color="inherit" underline="hover">
                Privacy Policy
              </Link> |{' '}
              <Link href="/terms-of-service" color="inherit" underline="hover">
                Terms of Service
              </Link>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </BoxStyled>

    
    // <Box
    //   sx={{
    //     backgroundColor: 'background.paper',
    //     color: 'background.contrastText',
    //     py: 4,
    //   }}
    // >
    //   <Container sx={{ minWidth: '100vw' }}>
    //     <Grid2 container spacing={2} alignItems="center">
    //       <Grid2 item xs={12} sm={6} display="flex" alignItems="center">             
    //         <Box component="img" src={"https://academiq-assets.s3.eu-north-1.amazonaws.com/Academiq-title.png"} sx={{
    //           width: '10rem',
    //           height: 'auto',
    //           marginRight: '1rem',
    //         }}/>
    //       </Grid2>
    //       <Grid2 item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'right' }}>
    //         <Typography variant="body2">
    //           &copy; {new Date().getFullYear()} AcademIQ. All rights reserved.
    //         </Typography>
    //         <Typography variant="body2">
    //           <Link href="/privacy-policy" color="inherit" underline="hover">
    //             Privacy Policy
    //           </Link> |{' '}
    //           <Link href="/terms-of-service" color="inherit" underline="hover">
    //             Terms of Service
    //           </Link>
    //         </Typography>
    //       </Grid2>
    //     </Grid2>
    //   </Container>
    // </Box>
  );
};

export default Footer;

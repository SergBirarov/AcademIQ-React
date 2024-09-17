
import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GetVw, GetVh, GetResponsiveFontSize } from '../../../utils/GeneralHelpers';

const LandingButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', mt: 4 }}>
      <Typography variant="h2" 
      sx={{ textTransform: 'uppercase',
          fontSize: `${GetResponsiveFontSize(24, 1.5, 36)}`, 
          padding: '12px 36px', 
          // border: '2px solid', 
          borderRadius: '0.5rem',
          borderColor: 'primary.main', 
          color: 'primary.main', 
          width: '100%', 
          cursor: 'pointer',
          maxWidth: `${GetVw(400)}vw`,
          '&:hover': {
            backgroundColor: 'primary.main', 
            color: 'white', 
          }, }}
          onClick={() => navigate('/login')}
          >Start Using AcademIQ</Typography>
      {/* <Button
        size="large"
        variant="text"
        sx={{
          textTransform: 'uppercase',
          fontSize: '1.25rem', 
          // padding: '12px 36px', 
          border: '2px solid', 
          borderColor: 'primary.main', 
          color: 'primary.main', 
          width: '100%', 
          maxWidth: '300px',
          '&:hover': {
            backgroundColor: 'primary.main', 
            color: 'white', 
          },
        }}
        onClick={() => navigate('/login')}
      >
        Start Using AcademIQ
      </Button> */}
    </Box>
  );
};

export default LandingButton;

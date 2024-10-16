import React from 'react';
import { Container } from '@mui/system';
import styled from '@emotion/styled';
import { Box, Grid2 } from '@mui/material';


const ContainerStyled = styled(Container)(({ theme }) => ({
  width: '80%',    // Takes up 80% of the screen width (rest for Profile Panel)
  height: '100%', 
  borderRadius: '16px',
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  }));

export default function MainRectangleContainer({ children }) {
    return (
      <ContainerStyled>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={8}>
          {/* Main content like "MainStudentScreen" */}
          {children}
        </Grid2>
      </Grid2>
    </ContainerStyled>
    );
}
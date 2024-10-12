import React from 'react';
import { Container } from '@mui/system';
import MainStudentScreen from '../components/common/MainStudentScreen';
import { Box, Grid2 } from '@mui/material';
import RepeatedActionsHome from '../components/common/RepeatedActionsHome';
import MainRectangleContainer from '../components/common/MainRectangleContainer';
import MainProfilePanel from '../components/common/profile/profilePanel/MainProfilePanel';
import { useUser } from '../../context/UserContext';
import { Login } from '@mui/icons-material';
import LoginPage from './LoginPage';


const HomePage = () => {
  const { user } = useUser();

  if(!user) {
    return (
      <LoginPage />
    )
  }


  return (
    <Container component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', height: '100vh' }}>
      <MainRectangleContainer>
        
      </MainRectangleContainer>

      <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MainProfilePanel />
      </Box>
    </Container>
  );
};

export default HomePage;

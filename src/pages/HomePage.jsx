import React from 'react';
import MainDrawer from '../components/common/MainDrawer';
import MainStudentScreen from '../components/common/MainStudentScreen';
import { Box } from '@mui/material';


const drawerWidth = 240;
const HomePage = () => {
  return (
    <Box component={"main"} sx={{  width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`, direction: "rtl" }}>
    <MainDrawer />
    <MainStudentScreen />
    </Box>
  );
};

export default HomePage;

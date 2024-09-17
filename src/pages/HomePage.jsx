import React from 'react';
import MainDrawer from '../components/common/MainDrawer';
import MainStudentScreen from '../components/common/MainStudentScreen';
import { Box, Grid2 } from '@mui/material';
import RepeatedActionsHome from '../components/common/RepeatedActionsHome';


const drawerWidth = 240;
const HomePage = () => {
  return (
    <Box component={"main"} sx={{  width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`, direction: "rtl" }}>
      <Grid2 container spacing={8}>
    <MainDrawer />
    <Box component={"section"}>
    <Grid2 item xs={12} sm={6} md={8}>
    <MainStudentScreen />
    </Grid2>
    </Box>
    <Box component={"section"}>
    <Grid2 item xs={12} sm={6} md={4}>
    <RepeatedActionsHome />
    </Grid2>
    </Box>
    </Grid2>
    </Box>
  );
};

export default HomePage;

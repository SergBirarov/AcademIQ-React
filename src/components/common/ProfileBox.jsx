import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../../context/AuthContext';


//TODO: logic for pull data from backend
//TODO: make it responsive

export default function ProfileBox() {

  const { user } = useAuth();

  let currentUser = user

  if (!currentUser)
    currentUser = {
      firstName: "ישראל",
      lastName: "ישראלי",
      degreeName: "הנדסת תכנה",
      schoolName: "המרכז האקדמי רופין",
      picture_URL: "https://source.unsplash.com/random/100x100?sig=1",
    }
  else {
    user.degreeName = "הנדסת תכנה";
    user.schoolName = "המרכז האקדמי רופין";
  }
  return (
    <Box component={"section"} sx={{ padding: 2, direction: 'rtl', bgcolor: 'background.paper', borderRadius: 2 }}>
      <Grid2 container alignItems="center" spacing={2} sx={{ display: 'flex' }}>
        <Grid2 item xs={4}>
          <Avatar
            alt={currentUser.firstName + ' ' + currentUser.lastName}
            src={currentUser.picture_URL}
            sx={{
              width: 40,
              height: 40,
              boxShadow: 3,
            }}
          />
        </Grid2>
        <Grid2 item xs={8}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {currentUser.firstName + ' ' + currentUser.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentUser.degreeName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentUser.schoolName}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};
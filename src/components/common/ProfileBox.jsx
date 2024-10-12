import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProfilePicture from '../common/profile/profilePanel/CircularProfilePicture';
import { useUser } from '../../../context/UserContext';
import ProfilePanel from './profile/ProfilePanel';
export default function ProfileBox() {
  const { user } = useUser();
    
    return (
        <Box component={"section"} sx={{padding: 2, direction: 'rtl', bgcolor: 'background.paper'}}>
        <Grid2 container alignItems="center" spacing={2} sx={{ display:'flex' }}>
          <Grid2 item xs={4}>
            <CircularProfilePicture image={user.picture_URL} size="small" />
          </Grid2>
          <Grid2 item xs={8}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             הנדסאי תכנה
            </Typography>
            <Typography variant="body2" color="text.secondary">
            המכללה הטכנולוגית רופין
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    );
};
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


//TODO: logic for pull data from backend
//TODO: make it responsive

export default function ProfileBox() {
    let student = {
        name: " ישראלי ישראל",
        degreeName: "הנדסת תכנה",
        schoolName: "המרכז האקדמי רופין",
        profileImage: "https://source.unsplash.com/random/100x100?sig=1",
    }
    return (
        <Box component={"section"} sx={{ padding: 2, direction: 'rtl', bgcolor: 'background.paper', borderRadius: 2 }}>
        <Grid2 container alignItems="center" spacing={2} sx={{ display:'flex', }}>
          <Grid2 item xs={4}>
            <Avatar
              alt={student.name}
              src={student.profileImage}
              sx={{
                width: 40,
                height: 40,
                boxShadow: 3,
              }}
            />
          </Grid2>
          <Grid2 item xs={8}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {student.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {student.degreeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {student.schoolName}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    );
};
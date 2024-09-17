import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function LogOutBtn() {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
        <Button size="medium" variant="outlined" color="error" >התנתק</Button>
        </Box>
    );
}
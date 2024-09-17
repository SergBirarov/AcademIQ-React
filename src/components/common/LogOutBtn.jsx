import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function LogOutBtn() {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="large" variant="outlined" color="error">התנתק</Button>
        </Box>
    );
}
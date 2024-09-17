import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LogOutBtn() {
    const navigate = useNavigate()
    const { logout } = useAuth()
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
            <Button size="medium" variant="outlined" color="error" onClick={() => {
                logout();
                navigate('/login');

            }} >התנתק</Button>
        </Box>
    );
}
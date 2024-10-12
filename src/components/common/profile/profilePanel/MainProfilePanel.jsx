import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CircularProfilePicture from './CircularProfilePicture';
import ProfileBox from '../../ProfileBox'
import ProfilePanel from '../ProfilePanel';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '16px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: theme.palette.background.default,
    alignItems: 'center',
}))
export default function MainProfilePanel() {
    return (
        <StyledBox>
            <ProfilePanel />
    </StyledBox>
    );
}
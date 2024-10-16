import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ProfilePanel from './ProfilePanel';
import ProfileMenu from '../ProfileMenu';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
            <Box sx={{ width: '100%', flexShrink: 0 }}>
            <ProfilePanel />
            </Box>
            <Box sx={{ width: '100%', flexShrink: 1 }}>
            <ProfileMenu />
            </Box>
    </StyledBox>
    );
}
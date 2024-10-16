import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GradeIcon from '@mui/icons-material/Grade';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from '../../../../context/UserContext'; 


const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    // flexDirection: 'column',
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // alignItems: 'center',
    direction:'rtl',
}));


const studentMenuItems = [
    { text: 'דף הבית', icon: <HomeIcon /> },
    { text: 'פרופיל', icon: <AssignmentIcon /> },
    { text: 'אזור למידה', icon: <GradeIcon /> },
    { text: 'הגדרות', icon: <SettingsIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
];

const professorMenuItems = [
    { text: 'Dashboard', icon: <HomeIcon /> },
    { text: 'Manage Courses', icon: <AssignmentIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
];

export default function ProfileMenu() {

    const { user } = useUser();
    const [anchorEl, setAnchorEl] = useState(null);

    // const menuItems = user.role === 'student' ? studentMenuItems : professorMenuItems;

    return(
            <StyledBox>
                <List>
                {studentMenuItems.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            </StyledBox>
    )
}
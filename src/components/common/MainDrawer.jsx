import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ProfileBox from './ProfileBox';
import BungalowIcon from '@mui/icons-material/Bungalow';
import TableChartIcon from '@mui/icons-material/TableChart';
import MessageIcon from '@mui/icons-material/Message';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BiotechIcon from '@mui/icons-material/Biotech';
import GradingIcon from '@mui/icons-material/Grading';
import LogOutBtn from './LogOutBtn';



const drawerWidth = 220;

const StudentMenu = () => {
  let icons = [<BungalowIcon />, <TableChartIcon />,<MessageIcon />, <HistoryEduIcon />, <PersonPinIcon />];  
  let texts = ['עמוד הבית', 'לוח מודעות', 'הודעות ', 'ציונים', 'פרופיל'];

  return (
      <List >
          {texts.map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto', marginLeft: 1  }}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText sx={{ textAlign: 'right', marginRight: 1, flexGrow: 1
                }}>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    )
}

const AdminMenu = () =>{
  const icons = [<HowToRegIcon />, <BiotechIcon />, <GradingIcon />];
  const texts = ['בדיקת נוכחות', 'העלאת חומרי לימוד', 'פרסום ציונים'];
  return(
    <>
    <Divider />
    <List >
          {texts.map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto', marginLeft: 1  }}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText sx={{ textAlign: 'right', marginRight: 1, flexGrow: 1
                }}>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </>
  )
};

export default function MainDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          direction: 'rtl',
        }}
        variant="permanent"
        anchor="right"
        
      >
        <Box sx={{ overflow: 'auto' }}>
            <ProfileBox />
        </Box>
        <Divider />
        <Box>
                <StudentMenu />
                <AdminMenu />
                <Divider />
</Box>
        <LogOutBtn />
      </Drawer>
    </Box>
  );
}
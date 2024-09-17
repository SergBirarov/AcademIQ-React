import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import BubbleMenu from '../BubbleMenu';

const drawerWidth = 240;
export default function MainStudentScreen() {
    return(
        <>
        <Box>
            <Grid2 container>
                <Grid2 item xs={12}>
                    <Typography variant='h1' sx={{ textAlign: "right" }}>ברוך הבא [שם התלמיד]</Typography>
                </Grid2>

                <Grid2 item xs={12}>
                    <BubbleMenu />
                </Grid2>

            </Grid2>

        </Box>
        </>
    )
}
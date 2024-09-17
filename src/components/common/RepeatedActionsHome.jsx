import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const RecentActions = () => {
    return(
        <List sx={{ width: '100%', bgcolor: 'background.paper', color: 'primary.main' }}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="שלחת פנייה מקוונת למרצה בקורס - תכנות מונחה עצמים"
                    sx={{ textAlign: "right" }}
                    />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    sx={{ color: 'primary.main', textAlign: "right" }}
                    
                    >הגשת את מטלת הבית בקורס - אוי ואבוי</ListItemText>
            </ListItem>

        </List>
    )
}

export default function RepeatedActionsHome() {
    return(
        <>
        <Paper component={"section"} sx={{ padding: 2, direction: "rtl", width: "100%", display: "flex", justifyContent: "right" }} 
        >
            <Grid2 container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "right", flexDirection: "column" }}>
                <Box component={"section"}>
                <Grid2 item xs={12} sx={{ textAlign: "right", direction: "rtl", display: "flex", flexDirection: "column" }}>
                    <Typography variant='sectionHeader' sx={{ textAlign: "right" }}>בביקורך האחרון ביצעת את הפעולות הבאות:</Typography>
                    <Typography variant='cardTitle' sx={{ textAlign: "right", mt: 1 }}>מכאן תוכלו לקפוץ חזרה לעניינים או להיזכר </Typography>
                    
                </Grid2>
                </Box>

                <Grid2 item xs={12}>
                    <RecentActions/>
                </Grid2>
            </Grid2>
        </Paper>
        </>
    )
}
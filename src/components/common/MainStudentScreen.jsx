import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import BubbleMenu from '../BubbleMenu';


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
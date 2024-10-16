import {  Card, CardContent, Typography,  Grid2 } from '@mui/material';
import styled from '@emotion/styled';
import CircularProfilePicture from './CircularProfilePicture';
import { useUser } from '../../../../../context/UserContext';

const CardStyled = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display:'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    height: '100%',
}));

export default function ProfilePanel() {

    const { user } = useUser();

    if(!user) {
        return null;
    }
    

    return(
            <CardStyled>
                <CardContent>

                        <Grid2 item xs={12} sm={12} display="flex" flexDirection="row" justifyContent="space-between"  alignItems="center">
                            <Typography
                             variant="h6"
                              align="center">
                                {user.firstName} {user.lastName}
                            </Typography>
                        <CircularProfilePicture image={user.picture_URL} size="small"/>
                        </Grid2>
            
                        <Grid2 item xs={12} sm={12} display="flex" flexDirection="column" alignItems="end">
                            <Typography variant="body2">
                                <strong>מוסד לימודים:</strong> המכללה הטכנולוגית רופין
                            </Typography>
                            <Typography variant="body2">
                                <strong>מסלול:</strong> הנדסאי תכנה
                            </Typography>
                            <Typography variant="body2">
                                <strong>מחזור:</strong> נ&quot;ט
                            </Typography>
                        </Grid2>

                        
                </CardContent>
            </CardStyled>
    )
}
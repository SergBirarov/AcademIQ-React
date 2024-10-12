import { Container } from '@mui/material';
import students from '../assets/tempData/data.json';
import ProfilePanel from '../components/common/profile/ProfilePanel';



export default function TempComp (){
    return(
        <>
        <Container>
            <h1>TempComp</h1>
            <ProfilePanel />
        </Container>
        </>
    )
}
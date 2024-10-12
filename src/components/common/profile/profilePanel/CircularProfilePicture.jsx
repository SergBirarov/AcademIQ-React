import { Box, Avatar } from "@mui/material";



export default function CircularProfilePicture({image, size = "medium"}){

    const sizes = {
        small: { width: 50, height: 50 },
        medium: { width: 100, height: 100 },
        large: { width: 150, height: 150 },
    };

    
    return(
        <Box>
            <Avatar
                src={image } 
                sx={{
                    width: sizes[size].width,
                    height: sizes[size].height,
                }}
            />
        </Box>
    )
}
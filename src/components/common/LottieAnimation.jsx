import React from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import { GetVw, GetVh } from '../../utils/GeneralHelpers';

const LottieAnimation = ({animation}) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: 'inherit',
        }}>
            <Lottie
                animationData={animation}
                loop={true}
                style={{
                    height: `${GetVh(100)}`,
                    width:`${GetVw(100)}`,
                }}/>
        </Box>
    )
};

export default LottieAnimation;
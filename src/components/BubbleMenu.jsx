import React, { useState, useEffect } from 'react';
import { Button, Box, styled } from '@mui/material';
import { GetVw } from '../../utils/GeneralHelpers';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
    width: '80vw', // Adjust the width of the box (responsive)
    height: '80vh', // Adjust the height of the box (responsive)
    border: '2px solid black', // Add a border
    position: 'relative', // Allow absolute positioning of children
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto', // Center the box on the page
}));

const BubbleMenu = () => {
    const [buttonSizes, setButtonSizes] = useState([
        { id: 1, size: 200, position: { top: '10%', left: '10%' } },
        { id: 2, size: 200, position: { top: '20%', left: '70%' } },
        { id: 3, size: 200, position: { top: '50%', left: '20%' } },
        { id: 4, size: 200, position: { top: '40%', left: '50%' } },
        { id: 5, size: 200, position: { top: '65%', left: '75%' } },
        { id: 6, size: 200, position: { top: '15%', left: '35%' } },
    ]);

    const navigate = useNavigate();


    // Fetch data from API
    useEffect(() => {
        const fetchButtonSizes = async () => {
            try {
                const response = await fetch('/api/Button');
                const data = await response.json();
                setButtonSizes(data);
            } catch (error) {
                console.error('Error fetching button sizes:', error);
            }
        };

        fetchButtonSizes();
    }, []);

    const handleButtonClick = async (buttonId) => {
        try {
            // await
            fetch(`/api/Button/${buttonId}`, { method: 'POST' });
            // Fetch updated button sizes after clicking
            // const response = await fetch('/api/Button');
            // const data = await response.json();
            // console.log(data);
            navigate("button");//TODO


        } catch (error) {
            console.error('Error registering button click:', error);
        }
    };

    return (
        <StyledBox>
            {buttonSizes.map((button) => (
                <Button
                    key={button.id}
                    variant="contained"
                    onClick={() => handleButtonClick(button.id)}
                    sx={{
                        width: `${GetVw(button.size)}vw`, // Make button size responsive
                        height: `${GetVw(button.size)}vw`, // Keep it square and responsive
                        maxWidth: `${button.size * 2}px`,
                        maxHeight: `${button.size * 2}px`,
                        borderRadius: '50%', // Circular buttons
                        position: 'absolute', // Absolute position inside the box
                        top: button.position.top, // Use responsive top position
                        left: button.position.left, // Use responsive left position
                        transition: 'all 0.3s ease', // Smooth animation when resizing
                    }}
                >
                    {button.id}
                </Button>
            ))}
        </StyledBox>
    );
};

export default BubbleMenu;

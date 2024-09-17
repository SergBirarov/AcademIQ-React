import React, { useState, useEffect } from 'react';
import { Button, Box, styled } from '@mui/material';
import { GetVw, GetVh } from '../utils/GeneralHelpers';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const BubbleMenu = () => {
    const [buttonSizes, setButtonSizes] = useState([
        { id: 1, size: 100, position: { top: '10%', left: '10%' } },
        { id: 2, size: 100, position: { top: '20%', left: '70%' } },
        { id: 3, size: 100, position: { top: '50%', left: '20%' } },
        { id: 4, size: 100, position: { top: '40%', left: '50%' } },
        { id: 5, size: 100, position: { top: '65%', left: '75%' } },
        { id: 6, size: 100, position: { top: '15%', left: '35%' } },
    ]);

    useEffect(() => {
        const fetchButtonSizes = async () => {
          try {
            const response = await fetch('/api/Button');
            const data = await response.json();
    
            const updatedButtonSizes = data.map((button) => ({
              ...button,
              size: calculateButtonSize(button.frequency),
            }));
    
            setButtonSizes(updatedButtonSizes);
          } catch (error) {
            console.error('Error fetching button sizes:', error);
          }
        };
    
        fetchButtonSizes();
      }, []);


      const calculateButtonSize = (frequency) => {
        const minSize = 150; 
        const maxSize = 300; 
        return minSize + (maxSize - minSize) * (frequency / 100); 
      };


      const handleButtonClick = async (buttonId) => {
        try {
          await fetch(`/api/Button/${buttonId}`, { method: 'POST' });
    
          navigate(`/button/${buttonId}`);
        } catch (error) {
          console.error('Error registering button click:', error);
        }
      };
    const navigate = useNavigate();


    // // Fetch data from API
    // useEffect(() => {
    //     const fetchButtonSizes = async () => {
    //         try {
    //             const response = await fetch('/api/Button');
    //             const data = await response.json();
    //             setButtonSizes(data);
    //         } catch (error) {
    //             console.error('Error fetching button sizes:', error);
    //         }
    //     };

    //     fetchButtonSizes();
    // }, []);

    // const handleButtonClick = async (buttonId) => {
    //     try {
    //         // await
    //         fetch(`/api/Button/${buttonId}`, { method: 'POST' });
    //         // Fetch updated button sizes after clicking
    //         // const response = await fetch('/api/Button');
    //         // const data = await response.json();
    //         // console.log(data);
    //         navigate("button");//TODO


    //     } catch (error) {
    //         console.error('Error registering button click:', error);
    //     }
    // };

    return (
        <Box
      sx={{
        width: GetVw(900),
        height: GetVh(400),
        position: 'relative',
        border: '3px solid black',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {buttonSizes.map((button) => (
        <motion.div
          key={button.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'absolute',
            top: button.position.top,
            left: button.position.left,
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleButtonClick(button.id)}
            sx={{
              width: GetVw(button.size),
              height: GetVh(button.size),
              maxWidth: `${button.size * 2}px`,
              maxHeight: `${button.size * 2}px`,
              borderRadius: '50%',
              position: 'absolute', 
              top: button.position.top, 
              left: button.position.left, 
              transition: 'all 0.3s ease', 
            }}
          >
            {button.id}
          </Button>
        </motion.div>
      ))}
    </Box>
    );
};

export default BubbleMenu;

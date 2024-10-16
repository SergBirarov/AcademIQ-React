import React, { useState, useEffect } from 'react';
import { Button, Box, styled, Typography, Paper } from '@mui/material';
import { GetVw, GetVh } from '../../utils/GeneralHelpers';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const BubbleMenu = () => {
  const [buttonSizes, setButtonSizes] = useState([
    { id: 1, size: 100, position: { top: '70%', left: '10%' } },
    { id: 2, size: 100, position: { top: '30%', left: '20%' } },
    { id: 3, size: 100, position: { top: '55%', left: '30%' } },
    { id: 4, size: 100, position: { top: '40%', left: '40%' } },
    { id: 5, size: 100, position: { top: '20%', left: '55%' } },
    { id: 6, size: 100, position: { top: '60%', left: '75%' } },
    { id: 7, size: 100, position: { top: '10%', left: '80%' } },
  ]);

  const svg = ['https://academiq-assets.s3.eu-north-1.amazonaws.com/a+plus.svg',
    'https://academiq-assets.s3.eu-north-1.amazonaws.com/bell.svg',
    'https://academiq-assets.s3.eu-north-1.amazonaws.com/book+with+pencil.svg',
    'https://academiq-assets.s3.eu-north-1.amazonaws.com/calendar+2.svg',
    'https://academiq-assets.s3.eu-north-1.amazonaws.com/gradeenvelope.svg',
    'https://academiq-assets.s3.eu-north-1.amazonaws.com/home.svg',
    'https://academiq-assets.s3.eu-north-1.amazonaws.com/student.svg',];

  const lables = ['ציונים', 'מערכת', 'מטלות', 'לוח שנה', 'ניתוח ביצועים', 'בית', 'איזור אישי'];
  const navs = ['grades', 'system', 'tasks', 'calendar', 'performance-analysis', 'home', 'personal-area'];


  useEffect(() => {
    const fetchButtonSizes = async () => {
      try {
        const response = await fetch('http://www.Misha-RN-Test.somee.com/api/Button', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
          cache: 'no-cache',
        });
        const data = await response.json();

        setButtonSizes(data.map((button) => ({
          id: button.id,
          size: button.size,
          position: buttonSizes.find(b => b.id === button.id)?.position || { top: '50%', left: '50%' },
          lastClickTimestamp: button.lastClickTimestamp
        })));
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
      await fetch(`http://www.Misha-RN-Test.somee.com/api/Button/${buttonId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        cache: 'no-cache',
      });

      navigate(`/${navs[buttonId - 1]}`);
    } catch (error) {
      console.error('Error registering button click:', error);
    }
  };
  const navigate = useNavigate();


  return (
    <Paper
      elevation={6}
      sx={{
        width: GetVw(900),
        height: GetVh(400),
        position: 'relative',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
    >
      {buttonSizes.map((button, index) => (
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
          <Box component={'button'}
            onClick={() => handleButtonClick(button.id)}
            sx={{
              width: GetVw(button.size),
              height: GetVh(button.size),
              maxWidth: `${button.size * 2}px`,
              maxHeight: `${button.size * 2}px`,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              position: 'absolute',
              top: button.position.top,
              left: button.position.left,
              transition: 'all 0.3s ease',
              backgroundColor: 'background.default',
              border: 'none'
            }}
          >
            <Box
              component="img"
              src={svg[index]}
              alt={`${lables[index]} icon`}
              sx={{
                minWidth: GetVw(button.size),
                minHeight: GetVh(button.size),
                maxWidth: `${button.size * 2}px`,
                maxHeight: `${button.size * 2}px`,
              }}

            />

            <Typography variant="caption" sx={{ textAlign: 'center', color: 'text.primary', fontWeight: 'bold', marginTop: -3 }}>
              {lables[index]}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Paper>
  );
};

export default BubbleMenu;

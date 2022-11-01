import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const HeroMain = () => {
  return (
    <div>
      {' '}
      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100vw',
          position: 'relative',
          top: {
            xs: '80px',
            sm: '90px',
            md: '120px',
          },
        }}
        component={motion.div}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#6f8d77',
          transition: {
            duration: 0.2,
            type: 'spring',
            stiffness: 80,
          },
        }}
      >
        <Box
          sx={{
            height: {
              xs: '40vh',
              sm: '50vh',
            },
            width: '100%',
          }}
        >
          img
        </Box>
      </Paper>
    </div>
  );
};

export default HeroMain;

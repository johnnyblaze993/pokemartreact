import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const HeroMain = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
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
          backgroundImage: `url(https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60)`,
          backgroundColor: 'rgba(0,0,0,0.5)',
          backgroundBlendMode: 'darken',
          //on hover remove bg color and bg blend mode
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)',
            backgroundBlendMode: 'none',
          },
        }}
        //darken the image

        component={motion.div}
        whileHover={{
          scale: 1.05,
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
        ></Box>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            width: 'auto',
            position: 'absolute',
            top: '10rem',
            left: '5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            textTransform: 'capitalize',
            letterSpacing: '0.2rem',
            padding: '1rem',
            borderRadius: '0.5rem',

            whiteSpace: 'nowrap',

            fontSize: {
              xs: '1.5rem',
              sm: '3rem',
              md: '4rem',
            },
          }}
          component={motion.div}
          //have text loop from left to right
          initial={{ x: '100vw' }}
          animate={{ x: '-200vw' }}
          transition={{
            duration: 12,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          Check out New styles throughout 20 categories
        </Typography>
      </Paper>
    </div>
  );
};

export default HeroMain;

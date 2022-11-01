import { ArrowBack } from '@mui/icons-material';
import { Box, Paper, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Favorited = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        component={motion.div}
        whileHover={{
          color: '#6f8d77',
        }}
      >
        <ArrowBack
          sx={{
            position: 'absolute',
            top: '-6rem',
            left: '1rem',
            fontSize: '3rem',
          }}
          onClick={() => navigate('/account')}
        />
      </Box>
      <h1>Favorited Orders</h1>
      <Stack>
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            mt: '2rem',
            height: '100%',
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
          order 1
        </Paper>
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            mt: '2rem',
            height: '100%',
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
          order 2
        </Paper>
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            mt: '2rem',
            height: '100%',
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
          order 3
        </Paper>
      </Stack>
    </Box>
  );
};

export default Favorited;

import { Box, Button, Paper } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CheckoutBtn = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        mt: '2rem',
      }}
      elevation={10}
      component={motion.div}
      whileHover={{
        scale: 1.05,
        backgroundColor: '#6f8d77',
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '75%',
            height: '5rem',
          }}
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Paper>
  );
};

export default CheckoutBtn;

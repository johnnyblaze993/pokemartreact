import { Box, Paper } from '@mui/material';
import React from 'react';

const FinalPrice = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        mt: '1rem',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Subtotal</h3>
        <h3>$0.00</h3>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Shipping</h3>
        <h3>$0.00</h3>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Tax</h3>
        <h3>$0.00</h3>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Total</h3>
        <h3>$0.00</h3>
      </Box>
    </Paper>
  );
};

export default FinalPrice;

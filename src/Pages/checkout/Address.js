import { Box, Paper } from '@mui/material';
import React from 'react';

const Address = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        mt: '1rem',
        fontSize: '.9rem',
      }}
    >
      <Box>
        <h3>Address</h3>
      </Box>
    </Paper>
  );
};

export default Address;

import { Box, Typography } from '@mui/material';
import React from 'react';

const TotalPrice = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '3rem',
              md: '4rem',
            },
            fontWeight: 'thin',
          }}
        >
          Total:
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '4rem',
              md: '5rem',
            },
            fontWeight: 'thin',
            color: '#cfe5d5',
          }}
        >
          $ 35.95
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalPrice;

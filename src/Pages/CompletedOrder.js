import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompletedOrder = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          height: '50vh',
        }}
        elevation={5}
      >
        CompletedOrder
      </Paper>
      <Button
        sx={{
          position: 'relative',
          top: '-2rem',
          height: '5rem',
          width: '50%',
        }}
        variant="contained"
        onClick={() => navigate('/')}
      >
        Return Home
      </Button>
    </Box>
  );
};

export default CompletedOrder;

import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '3rem',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '80%',
            md: '50%',
          },
        }}
      >
        <Typography variant="h1">Login</Typography>
        <Button variant="contained" fullWidth color="primary">
          Login
        </Button>
      </Box>

      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '80%',
            md: '50%',
          },
        }}
      >
        <Typography
          sx={{
            color: '#fff',
          }}
          variant="h1"
        >
          Register
        </Typography>
        <Button variant="contained" fullWidth color="primary">
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

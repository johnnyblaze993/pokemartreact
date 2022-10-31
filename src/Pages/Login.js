import { Box, Button, Paper, Typography } from '@mui/material';
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
      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
        }}
        elevation={5}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '80%',
            },
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '4rem',
                sm: '5rem',
              },
            }}
            variant="h1"
          >
            Login
          </Typography>
          <Button variant="contained" fullWidth color="primary">
            Login
          </Button>
        </Box>
      </Paper>

      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
        }}
        elevation={5}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '80%',
            },
            margin: '0 auto',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              textAlign: 'center',
              fontSize: {
                xs: '3rem',
                sm: '5rem',
              },
            }}
            variant="h1"
          >
            Register
          </Typography>
          <Button variant="contained" fullWidth color="primary">
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;

import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';

const GoogleLogin = ({ handleLogin }) => {
  return (
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
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={handleLogin}
        >
          Login with Google
        </Button>
      </Box>
    </Paper>
  );
};

export default GoogleLogin;

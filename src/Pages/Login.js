import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../FirebaseConfig';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

    navigate('/');
  };

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

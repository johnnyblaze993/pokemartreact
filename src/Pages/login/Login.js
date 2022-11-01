import { Box } from '@mui/material';
import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../FirebaseConfig';
import GoogleLogin from './GoogleLogin';
import Register from './Register';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const user = result.user;

      console.log(user);

      navigate('/');
    });
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
      <GoogleLogin handleLogin={handleLogin} />
      <Register />
    </Box>
  );
};

export default Login;

import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../FirebaseConfig';
import { db } from '../FirebaseConfig';
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  addDoc,
  collection,
  query,
  where,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const user = result.user.displayName;
      const email = result.user.email;
      const photoURL = result.user.photoURL;
      const uid = result.user.uid;
      console.log(user, email, photoURL, uid);

      console.log(user);
      const docRef = doc(db, 'users', uid);
      getDoc(docRef)
        .then((doc) => {
          if (!doc.exists()) {
            console.log('No such document!');
            addDoc(collection(db, 'users'), {
              name: user,
              email: email,
              photo: photoURL,
              id: uid,
            });
          } else {
            console.log('Document data:', doc.data());
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
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

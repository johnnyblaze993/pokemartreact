import React from 'react';

import { getAuth } from 'firebase/auth';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Account = () => {
  //get the current user
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  return (
    <Box>
      {user && (
        <Typography
          variant="div"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '3rem',
            },
            fontWeight: 'thin',
          }}
        >
          Hello,
        </Typography>
      )}
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: '3rem',
            sm: '4rem',
          },
          textAlign: 'center',
          fontWeight: 'bold',
          flexGrow: 1,
          flewWrap: 'wrap',
          color: '#fff',
        }}
      >
        {user && user?.displayName}{' '}
      </Typography>
      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          mt: '2rem',
          height: '100%',
        }}
        elevation={5}
        component={motion.div}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#6f8d77',
          transition: {
            duration: 0.2,
            type: 'spring',
            stiffness: 80,
          },
        }}
      >
        <Button
          variant="contained"
          //navigate to Past Orders
          onClick={() => navigate('/pastorders')}
        >
          Your orders
        </Button>
      </Paper>
      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          mt: '2rem',
          height: '100%',
        }}
        elevation={5}
        component={motion.div}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#6f8d77',
          transition: {
            duration: 0.2,
            type: 'spring',
            stiffness: 80,
          },
        }}
      >
        <Button variant="contained" onClick={() => navigate('/favorited')}>
          Saved Orders
        </Button>
      </Paper>
    </Box>
  );
};

export default Account;

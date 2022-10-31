import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import auth from '../FirebaseConfig';
import { Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const [data, setData] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/all?format=json')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);

  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <Paper
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100vw',
          position: 'relative',
          top: {
            xs: '80px',
            sm: '90px',
            md: '120px',
          },
        }}
      >
        <Box
          sx={{
            height: {
              xs: '40vh',
              sm: '50vh',
            },
            width: '100%',
          }}
        >
          img
        </Box>
      </Paper>
      <Box
        sx={{
          display: {
            xs: 'column',
            md: 'flex',
          },
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <Paper
          sx={{
            position: 'relative',
            top: {
              xs: '-10px',

              md: '20px',
            },
            width: {
              xs: '100%',
              md: '33%',
            },
            mb: {
              xs: '2rem',
              md: '0',
            },
            height: {
              xs: '200px',
              md: '450px',
            },

            padding: '2rem',
          }}
          elevation={5}
          component={motion.div}
          whileHover={{
            y: -90,
            transition: {
              duration: 0.06,
              type: 'spring',
              stiffness: 30,
            },
          }}
        >
          <Box> category 1</Box>
        </Paper>
        <Paper
          sx={{
            position: 'relative',
            top: {
              xs: '-10px',

              md: '20px',
            },
            width: {
              xs: '100%',
              md: '33%',
            },
            mb: {
              xs: '2rem',
              md: '0',
            },
            height: {
              xs: '200px',
              md: '450px',
            },

            padding: '2rem',
          }}
          elevation={5}
          component={motion.div}
          whileHover={{
            y: -90,
            transition: {
              duration: 0.06,
              type: 'spring',
              stiffness: 30,
            },
          }}
        >
          <Box> category 2</Box>
        </Paper>
        <Paper
          sx={{
            position: 'relative',
            top: {
              xs: '-10px',

              md: '20px',
            },
            width: {
              xs: '100%',
              md: '33%',
            },
            mb: {
              xs: '2rem',
              md: '0',
            },
            height: {
              xs: '200px',
              md: '450px',
            },

            padding: '2rem',
          }}
          elevation={5}
          component={motion.div}
          whileHover={{
            y: -90,
            transition: {
              duration: 0.06,
              type: 'spring',
              stiffness: 30,
            },
          }}
        >
          <Box> category 3</Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;

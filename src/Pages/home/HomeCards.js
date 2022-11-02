import { Box, Button, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCards = ({ homeDecor }) => {
  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <Box
        sx={{
          display: {
            xs: 'column',
            md: 'flex',
          },
          gap: '.3rem',
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
              xs: '1rem',
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

            backgroundColor: '#6f8d77',

            transition: {
              duration: 0.06,
              type: 'spring',
              stiffness: 30,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                alignSelf: 'center',
              }}
            >
              Shop All Items
            </Typography>
            <Button variant="contained" onClick={() => navigate('/products')}>
              Shop All
            </Button>
          </Box>
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
              xs: '1rem',
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

            backgroundColor: '#6f8d77',
            transition: {
              duration: 0.06,
              type: 'spring',
              stiffness: 30,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                alignSelf: 'center',
              }}
            >
              View All Item Categories
            </Typography>
            <Button variant="contained" onClick={() => navigate('/categories')}>
              Browse Categories
            </Button>
          </Box>
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

            backgroundColor: '#6f8d77',
            transition: {
              duration: 0.06,
              type: 'spring',
              stiffness: 30,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                alignSelf: 'center',
              }}
            >
              New Home Decor Arrivals
            </Typography>
            <Button variant="contained" onClick={homeDecor}>
              Shop Home Decor
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default HomeCards;

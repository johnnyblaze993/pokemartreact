import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Categories = ({ categories, categoryClicker }) => {
  const navigate = useNavigate();

  return (
    <Grid
      sx={{
        mt: '7rem',
        position: 'relative',
      }}
      container
      spacing={3}
    >
      <Box
        component={motion.div}
        whileHover={{
          color: '#6f8d77',
        }}
      >
        <ArrowBack
          sx={{
            position: 'absolute',
            top: '-2.5rem',
            left: '1rem',
            fontSize: '3rem',
            '&:hover': {
              transform: 'scale(1.2)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
          onClick={() => navigate('/')}
        />
      </Box>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              height: '30vh',
              justifyContent: 'space-between',
            }}
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
            key={category}
          >
            <Typography
              variant="h4"
              sx={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              {' '}
              {category}
            </Typography>
            <Button
              variant="contained"
              onClick={() => categoryClicker(category)}
            >
              Shop Now
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;

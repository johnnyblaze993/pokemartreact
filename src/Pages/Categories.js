import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const Categories = ({ categories }) => {
  return (
    <Grid
      sx={{
        mt: '5rem',
      }}
      container
      spacing={3}
    >
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
              }}
            >
              {' '}
              {category}
            </Typography>
            <Button variant="contained">Shop Now</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;

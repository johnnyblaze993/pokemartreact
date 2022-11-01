import { Grid, Paper } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  return (
    <Grid
      sx={{
        mt: {
          xs: '6rem',
          sm: '-10rem',
          md: '-20rem',
        },
      }}
      container
      spacing={3}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '30vh',
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
        >
          Category 1
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '30vh',
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
        >
          Category 2
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '30vh',
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
        >
          Category 3
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Categories;

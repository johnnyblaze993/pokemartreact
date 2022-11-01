import { Add, Remove } from '@mui/icons-material';
import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const CartItems = () => {
  return (
    <Grid
      container
      sx={{
        mt: {
          xs: '1rem',
          sm: '2rem',
        },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          height: {
            xs: '20vh',
            sm: '30vh',
          },
        }}
      >
        <Paper
          sx={{
            height: '100%',
            width: '100%',
          }}
          component={motion.div}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#6f8d77',
          }}
        >
          hey
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: '2.7rem',
              sm: '4rem',
            },
          }}
        >
          $ 35.95
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.5rem',
            },
          }}
        >
          In Stock
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Button variant="contained">
          <Add />
        </Button>
        <Typography
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
            },
          }}
        >
          {' '}
          1{' '}
        </Typography>
        <Button variant="contained">
          <Remove />
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Button fullWidth variant="contained">
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItems;

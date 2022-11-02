import { AttachMoney } from '@mui/icons-material';
import { Box, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Products = ({ items }) => {
  console.log(items);
  return (
    <Grid
      sx={{
        mt: '5rem',
      }}
      container
      spacing={3}
    >
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              px: '.5rem',
              py: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              height: '40vh',
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
            <motion.img
              src={item.images[0]}
              alt={item.name}
              style={{
                width: '100%',
                height: '18vh',
                objectFit: 'cover',
                objectPosition: 'scale-down',
                borderRadius: '5px',
                filter: 'brightness(70%)',
              }}
              //on hover change brightness to 100%
              whileHover={{
                filter: 'brightness(100%)',
                transition: {
                  duration: 0.2,
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3>
                {item.title.length > 20
                  ? item.title.slice(0, 20) + '...'
                  : item.title}
              </h3>

              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {' '}
                <AttachMoney /> {item.price}
              </p>
            </Box>
            <Button variant="contained">Add to Cart</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

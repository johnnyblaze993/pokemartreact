import { Add, ArrowBack, AttachMoney, Remove } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Rating, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ items, handleAddToCart, quantity, setQuantity }) => {
  const navigate = useNavigate();

  const removeQuantity = (id) => {};

  const addQuantity = (id) => {};

  return (
    <>
      <Grid
        sx={{
          mt: {
            xs: '5rem',
            sm: '8rem',
          },
          position: 'relative',
        }}
        container
        spacing={3}
      >
        {/* {BACK ARROW} */}

        <Box
          component={motion.div}
          whileHover={{
            color: '#6f8d77',
          }}
        >
          <ArrowBack
            sx={{
              position: 'absolute',
              display: {
                xs: 'none',
                sm: 'block',
              },
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

        {/* {START OF CARD MAP} */}

        {items.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                px: '.5rem',
                py: '1rem',
                display: 'flex',
                flexDirection: 'column',
                height: '48vh',
                justifyContent: 'space-around',
                overflow: 'hidden',
              }}
              component={motion.div}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#6f8d77',
                height: '60vh',
                transition: {
                  duration: 0.1,
                  type: 'spring',
                  stiffness: 20,
                },
              }}
            >
              {/* {IMAGE} */}

              <motion.img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '18vh',
                  objectFit: 'cover',
                  objectPosition: 'scale-down',
                  borderRadius: '5px',
                  filter: 'brightness(70%)',
                }}
                whileHover={{
                  filter: 'brightness(100%)',
                  transition: {
                    duration: 0.2,
                  },
                }}
              />

              {/* {PRICE AND TITLE} */}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <h3
                  style={{
                    color: '#fff',
                  }}
                >
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
                  <AttachMoney /> {item.price}
                </p>
              </Box>

              {/* {DESCRIPTION} */}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <motion.p
                  style={{
                    color: '#fff',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  whileHover={{
                    overflow: 'visible',
                    whiteSpace: 'normal',
                    textOverflow: 'none',

                    transition: {
                      duration: 0.2,
                      type: 'spring',
                      stiffness: 80,
                    },
                  }}
                >
                  {item.description}
                </motion.p>
              </Box>

              {/* {Rating} */}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Rating
                  sx={{
                    alignSelf: 'center',
                  }}
                  readOnly
                  value={item.rating}
                />{' '}
                <p>({item.rating})</p>
              </Box>

              {/* {Quantity} */}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant="contained"
                  onCLick={() => addQuantity(item.id)}
                >
                  <Add />
                </Button>
                <Typography
                  sx={{
                    backgroundColor: '#6f8d77',
                    color: '#fff',
                    padding: '.5rem',
                    width: '50%',
                    textAlign: 'center',
                  }}
                  variant="h6"
                >
                  {quantity}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => removeQuantity(item.id)}
                >
                  <Remove />
                </Button>
              </Box>

              {/* {ADD TO CART} */}

              <Button
                variant="contained"
                onClick={() =>
                  handleAddToCart(
                    item.title,
                    item.price,
                    item.thumbnail,
                    item.id,
                    item.rating,
                    item.description,
                    item.stock,
                    idx
                  )
                }
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;

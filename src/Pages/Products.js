import { ArrowBack, AttachMoney } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  Typography,
  Modal,
} from '@mui/material';

import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Products = ({ items }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                px: '.5rem',
                py: '1rem',
                display: 'flex',
                flexDirection: 'column',
                height: '40vh',
                justifyContent: 'space-evenly',
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
                  {' '}
                  <AttachMoney /> {item.price}
                </p>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>
                  {item.description.length > 25
                    ? item.description.slice(0, 25) + '...'
                    : item.description}
                </p>
                <div>
                  <Button
                    sx={{
                      color: '#fff',
                    }}
                    onClick={handleOpen}
                  >
                    More Info
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </Box>
              <Rating
                sx={{
                  alignSelf: 'center',
                }}
                readOnly
                value={item.rating}
              />
              <Button variant="contained">Add to Cart</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;

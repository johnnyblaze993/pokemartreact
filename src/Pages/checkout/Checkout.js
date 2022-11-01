import { ArrowBack } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import Address from './Address';
import FinalPrice from './FinalPrice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import OrderBtn from './OrderBtn';

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
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
            top: '-6rem',
            left: '1rem',
            fontSize: '3rem',
            '&:hover': {
              transform: 'scale(1.2)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
          onClick={() => navigate('/cart')}
        />
      </Box>
      <OrderBtn />
      <FinalPrice />
      <Address />
    </Box>
  );
};

export default Checkout;

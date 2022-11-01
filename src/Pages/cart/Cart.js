import { Box } from '@mui/material';
import React from 'react';

import TotalPrice from './TotalPrice';
import CheckoutBtn from './CheckoutBtn';
import CartItems from './CartItems';

const Cart = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '2rem',
      }}
    >
      <TotalPrice />
      <CheckoutBtn />
      <CartItems />
    </Box>
  );
};

export default Cart;

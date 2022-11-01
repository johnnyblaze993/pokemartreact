import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import Checkout from './Pages/checkout/Checkout';
import Categories from './Pages/Categories';
import { Box, Container } from '@mui/material';
import Account from './Pages/account/Account';
import Favorited from './Pages/account/Favorited';
import PastOrders from './Pages/account/PastOrders';
import NavSection from './components/NavSection';
import Login from './Pages/login/Login';
import CompletedOrder from './Pages/CompletedOrder';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <Box>
      <NavSection />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favorited" element={<Favorited />} />
          <Route path="/pastOrders" element={<PastOrders />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/completedOrder" element={<CompletedOrder />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;

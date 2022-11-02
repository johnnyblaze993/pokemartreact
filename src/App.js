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
import HomeDecor from './Pages/HomeDecor';
import CompletedOrder from './Pages/CompletedOrder';
import Products from './Pages/Products';
import FilteredItems from './Pages/FilteredItems';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [homeitems, setHomeItems] = useState([]);
  const navigate = useNavigate();
  console.log(filteredItems);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((json) => setItems(json.products));
  }, []);

  const categoryClicker = (category) => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setFilteredItems(json.products));

    navigate('/filteredItems');
  };

  const homeDecor = () => {
    fetch('https://dummyjson.com/products/category/home-decoration')
      .then((res) => res.json())
      .then((json) => setHomeItems(json.products));

    navigate('/homeDecor');
  };

  const handleAddToCart = (...item) => {
    console.log(item);
  };

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
          <Route path="/" element={<Home homeDecor={homeDecor} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/categories"
            element={
              <Categories
                categories={categories}
                categoryClicker={categoryClicker}
              />
            }
          />
          <Route path="/account" element={<Account />} />
          <Route path="/favorited" element={<Favorited />} />
          <Route path="/pastOrders" element={<PastOrders />} />
          <Route path="/completedOrder" element={<CompletedOrder />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <Products handleAddToCart={handleAddToCart} items={items} />
            }
          />
          <Route
            path="/filteredItems"
            element={<FilteredItems filteredItems={filteredItems} />}
          />
          <Route
            path="/homeDecor"
            element={<HomeDecor homeitems={homeitems} />}
          />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;

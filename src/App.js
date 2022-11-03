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
import { db, auth } from './FirebaseConfig';
import { addDoc, collection, doc, setDoc, getDocs } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [homeitems, setHomeItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  //get current user uid
  const auth = getAuth();
  const user = auth.currentUser?.uid;
  console.log(user);

  //adding to firebase cart
  const handleAddToCart = async (...item) => {
    console.log(item);
    const docRef = await addDoc(collection(db, 'Cart'), {
      title: item[0],
      price: item[1],
      url: item[2],
      id: item[3],
      description: item[5],
      uid: user,
      qty: item[6],

      // ...item[0],
      // ...item[0],
    });
    console.log('Document written with ID: ', docRef.id);
    console.log(item[0]);
  };

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
              <Products
                handleAddToCart={handleAddToCart}
                items={items}
                quantity={quantity}
                setQuantity={setQuantity}
              />
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

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
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

import { useEffect, useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [homeitems, setHomeItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  const navigate = useNavigate();

  //get current user uid
  const auth = getAuth();
  const user = auth.currentUser?.uid;

  //adding to firebase cart
  const handleAddToCart = async (...item) => {
    if (!user) {
      navigate('/login');
    }
    const docRef = await addDoc(collection(db, 'Cart'), {
      title: item[0],
      price: item[1],
      url: item[2],
      id: item[3],
      description: item[5],
      uid: user,
      qty: 1,
    });
    console.log('Document written with ID: ', docRef.id);

    const quantityHandler = (id) => {};
  };

  //setting the firestore cart to cartItems
  const getCartItems = async () => {
    const docRef = await getDocs(collection(db, 'Cart'));
    const docSnap = await docRef.docs.map((doc) => doc.data());
    setCartItems(docSnap);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  //Removing quantity from cart
  const removeQuantity = async (id) => {};

  //Adding quantity to cart
  const addQuantity = async (id) => {
    //count how many items in cartItems have the same id. that number is the quantity
  };

  const cartUpdater = () => {
    //if items in cart have the same id, add the quantity
    //if items in cart have different id, add the item

    const updatedCart = cartItems.reduce((acc, item) => {
      const found = acc.find((i) => i.id === item.id);
      if (found) {
        found.qty += item.qty;
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    setUpdatedCartItems(updatedCart);
  };

  useEffect(() => {
    cartUpdater();
  }, [cartItems]);
  console.log(updatedCartItems);

  //APi call for categories
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  //Api call for All items
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => res.json())
      .then((json) => setItems(json.products));
  }, []);

  //Api call for category chosen
  const categoryClicker = (category) => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setFilteredItems(json.products));

    navigate('/filteredItems');
  };

  //Api call for home decor
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
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
                quantity={quantity}
                setQuantity={setQuantity}
                updatedCartItems={updatedCartItems}
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

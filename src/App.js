import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Categories from './Pages/Categories';
import { Box } from '@mui/material';
import Account from './Pages/account/Account';
import Favorited from './Pages/account/Favorited';
import PastOrders from './Pages/account/PastOrders';
import NavSection from './components/NavSection';

function App() {
  return (
    <Box>
      <NavSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favorited" element={<Favorited />} />
        <Route path="/pastOrders" element={<PastOrders />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Box>
  );
}

export default App;

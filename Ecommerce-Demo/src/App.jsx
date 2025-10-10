import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { HomePage } from './Pages/home/HomePage';

import axios from 'axios';

import { CheckoutPage } from './Pages/checkout/CheckoutPage';

import { OrdersPage } from './Pages/orders/OrdersPage';

import { TrackingPage } from './Pages/TrackingPage';

import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    };

  useEffect(() => {
    
    loadCart();

  }, []);



  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart}  loadCart={loadCart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />

    </Routes>
  )
}

export default App
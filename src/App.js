import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import Certificate from './components/Certificate';
import CartPage from './components/CartPage';
import CpoyRight from './components/CpoyRight';
import CartButtonn from './components/CartButtonn';
import OrderSummary from './components/OrderSummary';

function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const [orderItem , setOrderItem] = useState([]);

  const handleAddToCart = (productItem) => {
    setCartItems([...cartItems , productItem])
  }

  const handleOrderItem =(oredritem , val)=>{
    setOrderItem([{...oredritem , val, orderItem}])
  }

  const urlpath = window.location.pathname

  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product handleAddToCart = {handleAddToCart} />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage handleOrderItem={handleOrderItem}   cartItems={cartItems} />} />
        <Route path="/order" element={<OrderSummary  orderItem={orderItem}/>} />
      </Routes>
      <CartButtonn className='cart-button' />
      {
        urlpath === '/order' ?(<div></div>):(<div><Footer /><CpoyRight /></div>)
      }
       <Footer /> 
       <CpoyRight /> 
    </div>
  );
}

export default App;

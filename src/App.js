import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import OurStore from './pages/OurStore.js';
import SingleProduct from './pages/SingleProduct.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Singup from './pages/Singup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import RefundPolicy from './pages/RefundPolicy.js';
import ShippingPolicy from './pages/ShippingPolicy.js';
import TermAndConditions from './pages/TermAndConditions.js';
import { PrivateRoutes } from './routing/PrivateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';
import Orders from './pages/Orders';
import Profile from './pages/Profile.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProduct />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='cart' element={<PrivateRoutes><Cart /></PrivateRoutes>} />
            <Route path='my-orders' element={<PrivateRoutes><Orders /></PrivateRoutes>} />
            <Route path='my-profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
            <Route path='checkout' element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<PrivateRoutes><Wishlist /></PrivateRoutes>} />
            <Route path='login' element={<OpenRoutes><Login /></OpenRoutes>} />
            <Route path='singup' element={<OpenRoutes><Singup /></OpenRoutes>} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route path='reset-password/:token' element={<ResetPassword />} />
            <Route path='blog/:id' element={<SingleBlog />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='term-conditions' element={<TermAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

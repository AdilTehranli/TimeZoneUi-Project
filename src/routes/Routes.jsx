import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Router} from "./Const";
import Home from '../pages/home/Home';
import Shop from '../pages/site/shop/Shop';
import About from '../pages/about/About';
import ProductDetails from '../pages/productdetails/ProductDetails';
import Contact from '../pages/contact/Contact';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import CartList from '../pages/cartlist/CartList';
import WishList from '../pages/site/wishlist/WishList';
import Checkout from '../pages/checkout/Checkout';
import Blog from '../pages/blog/Blog';
import Navbar from '../components/navbar/Navbar';
import Footer from '../layouts/footer/Footer';

function Routs() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={Router.Home.toString()} element={<Home/>}/>
<Route path={Router.Shop.toString()}element={<Shop/>}/>
<Route path={Router.About.toString()} element={<About/>}/>
<Route path={Router.ProductDetails.toString()}element={<ProductDetails/>}/>
<Route path={Router.Contact.toString()} element={<Contact/>}/>
<Route path={Router.Login.toString()} element={<Login/>}/>
<Route path={Router.Register.toString()} element={<Register/>}/>
<Route path={Router.CartList.toString()} element={<CartList/>}/>
<Route path={Router.WishList.toString()} element={<WishList/>}/>
<Route path={Router.Checkout.toString()} element={<Checkout/>}/>
<Route path={Router.Blog.toString()} element={<Blog/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routs
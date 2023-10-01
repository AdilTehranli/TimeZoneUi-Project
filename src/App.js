import Navbar from "./components/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/site/shop/Shop";
import About from "./pages/about/About";
import ProductDetails from "./pages/productdetails/ProductDetails";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CartList from "./pages/cartlist/CartList";
import WishList from "./pages/site/wishlist/WishList";
import Checkout from "./pages/checkout/Checkout";
import ScrollUp from "./components/scrollup/ScrollUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <ScrollUp/>  
   <Navbar/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/productdetail/:id" element={<ProductDetails/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/cartlist" element={<CartList/>}/>
<Route path="/wishlist" element={<WishList/>}/>
<Route path="/checkout" element={<Checkout/>}/>

   </Routes>
   <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;

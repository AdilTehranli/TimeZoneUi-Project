import Navbar from "./components/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import ProductDetails from "./pages/productdetails/ProductDetails";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/productdetail/:id" element={<ProductDetails/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>

   </Routes>
   <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;

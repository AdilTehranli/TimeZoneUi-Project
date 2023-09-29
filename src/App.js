import Navbar from "./components/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/about" element={<About/>}/>
   </Routes>
   <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

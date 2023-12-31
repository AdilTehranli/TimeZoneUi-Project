
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import AboutTable from'./pages/about/AboutTable'
import AboutCreate from'./pages/about/AboutCreate'
import AboutUpdate from'./pages/about/AboutUpdate'

import Employees from './pages//Employees'
import EmployeeDetail from './components/admin/employee/EmployeeDetail';

import BannerTable from './pages/Banner/BannerTable';
import BannerDetail from './pages/Banner/BannerDetail';
import BannerCreate from './pages/Banner/BannerCreate';
import BannerUpdate from './pages/Banner/BannerUpdate';
import Login from './pages/Login';
import Navbar from './components/layout/Navbar';
import BrandCreate from './pages/Brand/BrandCreate'
import BrandDetail from './pages/Brand/BrandDetail';
import BrandUpdate from './pages/Brand/BrandUpdate';
import BrandTable from './pages/Brand/BrandTable';

import SliderTable from './pages/slider/SliderTable';
import SliderDetail from './pages/slider/SliderDetail';
import SliderCreate from './pages/slider/SliderCreate';
import SliderUpdate from './pages/slider/SliderUpdate';

import CategoryTable from './pages/category/CategoryTable';
import CategoryDetail from './pages/category/CategoryDetail';
import NotFound404 from './pages/notFound/NotFound404';
import CategoryCreate from './pages/category/CategoryCreate';
import CategoryUpdate from './pages/category/CategoryUpdate';
import BadRequset400 from './pages/notFound/BadRequset400';
import BlogTable from './pages/blog/BlogTable';
import BlogCreate from './pages/blog/BlogCreate';
import BlogDetail from './pages/blog/BlogDetail';
import BlogUpdate from './pages/blog/BlogUpdate';
import ProductTable from './pages/product/ProductTable';
import ProductCreate from './pages/product/ProductCreate';
import ProductUpdate from './pages/product/ProductUpdate';
import ProductDetail from './pages/product/ProductDetail';
import ContactTable from './pages/contact/ContactTable';
import ContactDetail from './pages/contact/ContactDetail';
import Protection from './pages/Protection';





function App() {



  return (


    <Router>

      <Navbar />
      <div className='app'>


        <Routes>


          <Route path="/" element={<Login/>} />

           {/* <Route element={<Protection />}> */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/404" element={<NotFound404 />} />
          <Route path="/400" element={<BadRequset400 />} />

          <Route path="/aboutTable" element={<AboutTable/>} />
          <Route path="/aboutCreate" element={<AboutCreate />} />
          <Route path="/aboutUpdate/:id" element={<AboutUpdate />} />

          <Route path="/banner" element={<BannerTable />} />
          <Route path="/banner/detail/:id" element={<BannerDetail />} />
          <Route path="/bannerCreate" element={<BannerCreate />} />
          <Route path="/bannerUpdate/:id" element={<BannerUpdate />} />

          <Route path="/brandTable" element={<BrandTable/>} />
          <Route path="/brand/detail/:id" element={<BrandDetail/>} />
          <Route path="/brandCreate" element={<BrandCreate />} />
          <Route path="/brandUpdate/:id" element={<BrandUpdate />} />


          <Route path="/slider" element={<SliderTable />} />
          <Route path="/slider/detail/:id" element={<SliderDetail/>} />
          <Route path="/sliderCreate" element={<SliderCreate />} />
          <Route path="/sliderUpdate/:id" element={<SliderUpdate />} />



          <Route path="/categoryTable" element={<CategoryTable/>} />
          <Route path="/categoryTable/detail/:id" element={<CategoryDetail/>} />
          <Route path="/categoryCreate" element={<CategoryCreate />} />
          <Route path="/categoryUpdate/:id" element={<CategoryUpdate />} />

          <Route path="/blogTable" element={<BlogTable/>} />
          <Route path="/blogTable/detail/:id" element={<BlogDetail/>} />
          <Route path="/blogCreate" element={<BlogCreate />} />
          <Route path="/blogUpdate/:id" element={<BlogUpdate />} />


          <Route path="/productTable" element={<ProductTable/>} />
          <Route path="/productCreate" element={<ProductCreate />} />
          <Route path="/productUpdate/:id" element={<ProductUpdate />} />
          <Route path="/productTable/detail/:id" element={<ProductDetail/>} />

          <Route path="/contactTable" element={<ContactTable/>} />
          <Route path="/contact/detail/:id" element={<ContactDetail/>} />


          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/employee" element={<Employees/>} />
          <Route path="/employee/detail/:id" element={<EmployeeDetail/>} />

          {/* </Route> */}
        </Routes>
      </div>

    </Router>


  );
}

export default App;

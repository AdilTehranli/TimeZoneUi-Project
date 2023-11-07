import React, { useState, useEffect } from 'react';
import Slider from '../../../components/slider/Slider';
import './Shop.scss';
import Products from '../../../components/products/Products';
import Wrapper from '../../../components/wrapper/Wrapper';
import PriceRange from '../../../components/pricerange/PriceRange';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Shop = () => {
  const itemsPerPage = 6;
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [items, setItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(100000);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  
  const handlePriceChange = (range) => {
    setPriceRange(range);
  };
  const handlePageClick = (selectedPage) => {
    const newPageNumber = selectedPage.selected + 1;
    setPageNumber(newPageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  useEffect(() => {
    axios
      .get(`https://localhost:7027/api/Products/GetProductPagination?PageNumber=${pageNumber}&PageSize=${pageSize}`)
      .then((res) => {
        if (res.data && res.data.data && Array.isArray(res.data.data)) {
          setItems(res.data.data);
          setTotalPages(res.data.totalPages);
          const maxPriceFromAPI = Math.max(...res.data.data.map((item) => item.price));
          setMaxPrice(maxPriceFromAPI);
        } else {
          console.error('API response is not as expected:', res.data);
          setItems([]);
          setTotalPages(0);
        }
      })
      .catch((error) => {
        console.error(error);
        setItems([]);
        setTotalPages(0);
      });
  }, [pageNumber, pageSize]);
  
  
  
  useEffect(() => {
    let filteredItems = items.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    if (selectedCategory !== 'All') {
      filteredItems = filteredItems.filter((item) => item.category === selectedCategory);
    }

    setFilteredProducts(filteredItems);
  }, [priceRange, items, selectedCategory]);

  return (
    <div>
      <Slider title="Watch Shop" />
      <div className="container">
        <div className="sort">
          <div className="row">
            <div className="sort__orders col-10">
              <ul className="sort__orders__ul d-flex">
                <li onClick={() => handleCategoryChange('All')}>All</li>
                <li onClick={() => handleCategoryChange('Man')}>Man</li>
                <li onClick={() => handleCategoryChange('Woman')}>Woman</li>
                <li onClick={() => handleCategoryChange('Unisex')}>Unisex</li>
              </ul>
            </div>
            <div className="sort__select col-2">
              <select className="form-select" aria-label="Default select example" onChange={(e) => handlePageSizeChange(e.target.value)}>
                <option value="4" selected>40 per page</option>
                <option value="5">50 per page</option>
                <option value="6">60 per page</option>
                <option value="7">70 per page</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6">
          <PriceRange onPriceChange={handlePriceChange} maxPrice={maxPrice} />
          </div>
          <div className="alert col-xl-10 col-lg-12 col-md-12 col-sm-6 text-center">
            {filteredProducts.length === 0 ? (
              <p>No products in the selected category.</p>
            ) : (
              <Products items={filteredProducts} />
              
            )}
              <ReactPaginate className='paginate'
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => handlePageChange(selected + 1)}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active" 
        
      />
          </div>
        </div>
        <Wrapper />
      </div>
    </div>
  );
};

export default Shop;

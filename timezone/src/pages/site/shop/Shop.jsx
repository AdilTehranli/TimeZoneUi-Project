import React, { useState, useEffect } from 'react';
import Slider from '../../../components/slider/Slider';
import './Shop.scss';
import Products from '../../../components/products/Products';
import Wrapper from '../../../components/wrapper/Wrapper';
import PriceRange from '../../../components/pricerange/PriceRange';
import axios from 'axios';

const Shop = () => {
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [items, setItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    axios
      .get('https://localhost:7027/api/Products/GetProduct')
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

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
              <select className="form-select" aria-label="Default select example">
                <option selected>40 per page</option>
                <option value="1">50 per page</option>
                <option value="2">60 per page</option>
                <option value="3">70 per page</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <PriceRange onPriceChange={handlePriceChange} />
          </div>
          <div className="col-10">
            <Products items={filteredProducts} />
          </div>
        </div>
        <Wrapper />
      </div>
    </div>
  );
};

export default Shop;

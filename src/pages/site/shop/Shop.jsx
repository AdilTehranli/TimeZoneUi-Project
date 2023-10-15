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

  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  useEffect(() => {
  
    axios
      .get('https://localhost:7027/api/Products')
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.error(error));
  }, []); 

  useEffect(() => {
    const filteredItems = items.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    setFilteredProducts(filteredItems);
  }, [priceRange, items]);

  return (
    <div>
      <Slider title="Watch Shop" />
      <div className="container">
      <div className="sort">

<div className="row">

      <div className="sort__orders col-10 ">
        <ul className="sort__orders__ul d-flex">
          <li>NewestArrivals</li>
          <li>Price High To Low</li>
          <li>Most Populer</li>
        </ul>
      </div>
        <div className="sort__select col-2">
          <select class="form-select" aria-label="Default select example">
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

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../products/Products.scss';

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='products'>
      <div className="container">
        <div className="row">
          {items.map((product, index) => (
            <div key={index} className="col-4 products__item">
              <div className="products__item__container">
                <div className="products__item__image">
                  <img src={product.image} alt="" />
                  <div className="products__item__image__icon">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="products__item__image__text">
                    <p>Add To Cart</p>
                  </div>
                </div>
                <div className="products__item__title">
                  <Link className='title__link' to={`/productdetail/${product.id}`}> 
                    <h3>{product.title}</h3>
                  </Link>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

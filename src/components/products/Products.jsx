import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../products/Products.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';   

const Products = ({ items }) => {
  const [item, setItems] = useState([]); 
  const dispatch=useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart({
      ...product,
      quantity: 1 
    }));
  };

  useEffect(() => {
    if (items && items.length > 0) {
      setItems(items); 
    }
  }, [items]);
  
  if (!items) {
    return <div>Loading...</div>;
  }

  if (items.length === 0) {
    return <div>No items available</div>;
  }
  if (!item || item.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {item.map((product, index) => (
            <div key={index} className="col-4 products__item">
              <div className="products__item__container">
                <div className="products__item__image">
                  <img src={product.image} alt="" />
                  <div className="products__item__image__icon">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="products__item__image__text">
                  <p onClick={() => {
  handleAddToCart(product);toast.success('Added to the card');
}}>Add To Cart</p>

                  </div>
                </div>
                <div className="products__item__title">
                  <Link className="title__link" to={`/productdetail/${product.id}`}>
                    <h3>{product.title}</h3>
                  </Link>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    </div>
  );
};

export default Products;

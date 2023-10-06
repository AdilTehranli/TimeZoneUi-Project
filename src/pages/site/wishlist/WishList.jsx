import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import './WishList.scss';
import Slider from '../../../components/slider/Slider';
import { addToCart } from '../../../redux/slice/CartSlice';
import { toast } from 'react-toastify';

const WishList = () => {
  const [cartProducts, setCartProducts] = useState([])
  const dispatch = useDispatch(); 

  const handleAddToCart = (product) => {
    const existingProduct = cartProducts.find((p) => p.id === product.id);
  
    if (existingProduct) {
      const updatedCart = cartProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCartProducts(updatedCart);
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
    toast.success('Added to cart');
  };

  const likedProducts = useSelector(state => state.likeslice.list);

  return (
    <div>
      <Slider title="WishList" />
      <div className="wishlist-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {likedProducts.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={`Product ${product.id}`} />
                  <span>{product.title}</span>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button className="wishlist-add-to-cart-button" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WishList;

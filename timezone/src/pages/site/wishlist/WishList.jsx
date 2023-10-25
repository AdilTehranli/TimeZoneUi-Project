import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import './WishList.scss';
import Slider from '../../../components/slider/Slider';
import { addToCart } from '../../../redux/slice/CartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const WishList = () => {
  const [cartProducts, setCartProducts] = useState([])
  const dispatch = useDispatch(); 
  const isUserLoggedIn = !!localStorage.getItem("token");
const navigate=useNavigate()

  const handleAddToCart = (product) => {
    if (isUserLoggedIn) {
      const existingProduct = cartProducts.find((p) => p.id === product.id);
  
      if (existingProduct) {
        const updatedCart = cartProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        setCartProducts(updatedCart);
      } else {
        dispatch(addToCart({ ...product, quantity: 1 }));
      }
    } else {
      toast.error("Please log in to add to cart");
      navigate('/login')
    }
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
                  <img src={`https://localhost:7027//${product.productImage}`} alt={`Product ${product.id}`} />
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

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import './WishList.scss';
import Slider from '../../../components/slider/Slider';
import { addToCart } from '../../../redux/slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { removeLike } from '../../../redux/slice/LikeSlice';

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
                  <button className="wishlist-add-to-cart-button"  onClick={() => {
                        handleAddToCart(product);
                        toast.success("Added to the card");
                      }}>Add to Cart</button>
                  <BsTrash className="trash" onClick={() => {dispatch(removeLike(product.id));toast.success("Product deleted")}} style={{cursor:'pointer'}} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        theme="light"
      />
    </div>
  );
}

export default WishList;

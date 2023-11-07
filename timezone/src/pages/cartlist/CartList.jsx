import React, { useState, useEffect } from 'react';
import './CartList.scss';
import { Link } from 'react-router-dom';
import Slider from '../../components/slider/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { removeFromCart } from '../../redux/slice/CartSlice';

const CartList = () => {
  const [items, setItems] = useState([]);  

  const cart = useSelector(state => state.cart.list);
  const [cartProducts, setCartProducts] = useState(cart);
  const item = useSelector(state => state.items);
  const dispatch = useDispatch();

  const totalItems = useSelector(state => state.cart.totalItems);
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; 
    }
  
    const updatedCart = cartProducts.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    const existingProduct = updatedCart.find((p) => p.id === productId);
  
    if (!existingProduct) {
      const productToAdd = items.find((item) => item.id === productId);
      updatedCart.push({ ...productToAdd, quantity: 1 });
    }
  
    calculateTotal();
    setCartProducts(updatedCart);
  };
  const calculateProductTotal = (product) => {
    if (product && typeof product.price === 'number' && typeof product.quantity === 'number') {
      return (product.price * product.quantity).toFixed(2);
    } else {
      return "0.00"; 
    }
  };
  const handleRemoveProduct = (productId) => {
    const updatedCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(updatedCart);
  
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const updatedStoredCart = storedCartProducts.filter((product) => product.id !== productId);
    localStorage.setItem('cartProducts', JSON.stringify(updatedStoredCart));
  
    dispatch(removeFromCart(productId));
  };

  
  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach(product => {
      if (product && product.price !== undefined && product.quantity !== undefined) {
        total += product.price * product.quantity;
      }
    });
    return total.toFixed(2);
  };

  
  useEffect(() => {
    setCartProducts(cart || []);
  }, [cart]);

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedCartProducts);
  }, []);
  
  useEffect(() => {    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    calculateTotal();
  }, [cartProducts]);

  
  return (
    <div>
      <Slider title="Cart List" />
      <div className="container">
        <div className="cart-container">
          {cartProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <img src={`https://localhost:7027//${product.productImage}`} alt={product.title} width="100" />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p className='category'>{product.category}</p>
                  <p className='brand'>{product.brand}</p>
                  <b>${product.price}</b>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
              </div>
              <div className="product__total d-flex">
                <p>Total: ${calculateProductTotal(product)}</p>
                <BsTrash className="trash"        onClick={() => {
          handleRemoveProduct(product.id);
          toast.success("Product deleted"); 
        }}
/>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <p>SubTotal: ${calculateTotal()}</p>
        </div>
        <Link to={'/checkout'}>
          <button className="checkout-button"> Go To Checkout</button>
        </Link>
      </div>
      <ToastContainer      position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  );
};

export default CartList;
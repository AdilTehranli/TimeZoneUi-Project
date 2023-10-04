import React, { useState, useEffect } from 'react';
import './CartList.scss';
import { Link } from 'react-router-dom';
import Slider from '../../components/slider/Slider';
import { useSelector, useDispatch } from 'react-redux';

const CartList = () => {
  const [items, setItems] = useState([]);  

  const cart = useSelector(state => state.cart.list);
  const [cartProducts, setCartProducts] = useState(cart);
  const dispatch = useDispatch();
  const item = useSelector(state => state.items);

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
  
    setCartProducts(updatedCart);
    calculateTotal();
  };
  const calculateProductTotal = (product) => {
    if (product && typeof product.price === 'number' && typeof product.quantity === 'number') {
      return (product.price * product.quantity).toFixed(2);
    } else {
      return "0.00"; 
    }
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
  
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
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
                <img src={product.image} alt={product.title} width="100" />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
              </div>
              <div className="product__total">
                <p>Total: ${calculateProductTotal(product)}</p>
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
    </div>
  );
};

export default CartList;

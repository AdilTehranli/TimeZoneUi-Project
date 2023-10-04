import React from 'react';
import './CartList.scss';
import Slider from '../../components/slider/Slider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CartList = () => {
  const [product, setProducts] = useState([]);

  const cart = useSelector(state => state.cart.list);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 0) {
      return;
    }
  
    const updatedCart = cart.map(product =>
      product.id === productId
        ? { ...product, quantity: newQuantity }
        : product
    );
  
    setProducts(updatedCart);
  };
  
  const calculateProductTotal = (product) => {
    return (product.price * product.quantity).toFixed(2);
  };
  const calculateTotal = () => {
    let total = 0;
    cart.forEach(product => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };
  

  return (
    <div>
      <Slider title="Cart List" />
      <div className="container">
        <div className="cart-container">
          {cart.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <img src={product.image} alt={product.title} width="100" />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(()=>product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(()=>
                  product.id, product.quantity + 1)}>+</button>
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
}

export default CartList;

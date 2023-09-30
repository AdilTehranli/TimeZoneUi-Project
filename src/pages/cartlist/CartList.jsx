import React, { useState } from 'react';
import './CartList.scss';
import Slider from '../../components/slider/Slider';

const CartList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.80, quantity: 1 },
    { id: 2, name: 'Product 2', price: 24.50, quantity: 1 },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 0) {
      return;
    }

    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <Slider title="Cart List" />
      <div className="container">
        <div className="cart-container">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s${product.id}.jpg`} alt={`Product ${product.id}`} width="100" />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Total: ${calculateTotal()}</p>
        </div>
        <button className="checkout-button"> Go To Checkout</button>
      </div>
    </div>
  );
}

export default CartList;

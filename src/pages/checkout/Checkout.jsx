import React from 'react';
import Slider from '../../components/slider/Slider';
import '../checkout/Checkout.scss';

const Checkout = () => {
  return (
    <div>
      <Slider title="Checkout" />
      <div className="container">

      <div className="checkout">
        <div className="billing-details">
          <h3>Billing Details</h3>
          <div className="billing-info">
            <label htmlFor="email">Email:</label>
            <input className='form-control' type="email" id="email" name="email" />
          </div>
          <div className="billing-info">
            <label htmlFor="name">Name:</label>
            <input className='form-control' type="text" id="name" name="name" />
          </div>
          <div className="billing-info">
            <label htmlFor="phone">Phone Number:</label>
            <input className='form-control' type="tel" id="phone" name="phone" />
          </div>
        </div>
        <div className="your-order">
          <h3>Your Order</h3>
          <div className="order-item">
            <span>Product 1</span>
            <span>Quantity: 2</span>
          </div>
          <div className="order-item">
            <span>Product 2</span>
            <span>Quantity: 1</span>
          </div>
          <div className="total-price">
            <span>Total Price:</span>
            <span>$45.80</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Checkout;

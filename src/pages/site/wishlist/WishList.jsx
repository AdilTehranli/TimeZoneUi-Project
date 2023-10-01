import React from 'react';
import './WishList.scss';
import Slider from '../../../components//slider/Slider';


const WishList = () => {
  const products = [
    { id: 1, name: 'Wish Product 1', price: 25.00 },
    { id: 2, name: 'Wish Product 2', price: 19.99 },
  ];

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
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={`https://via.placeholder.com/100`} alt={`Product ${product.id}`} />
                  <span>{product.name}</span>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <button className="wishlist-add-to-cart-button">Add to Cart</button>
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

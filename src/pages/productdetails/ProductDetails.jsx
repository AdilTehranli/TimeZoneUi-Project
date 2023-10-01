import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../components/slider/Slider';
import '../productdetails/ProductDetails.scss';
import Spinner from '../../components/spinner/Spinner';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <Slider title="ProductDetails"/>
      <div className="container">

      {product ? (
        <div>
          <div className="productsdetail">

<div className="productdetails__all text-center col-6">
  <img className='image_prod' src={product.image} alt="" />
  <div className="product_info col-6">
    <h2>{product.title}</h2>
    <p>${product.price}</p>
    <button>Add To Cart</button>
    <button>Add To Wishlist</button>
  </div>
</div>
          </div>



      </div>
      ) : (
        <p><Spinner/></p>
        )}
    </div>
        </div>
  );
};

export default ProductDetails;

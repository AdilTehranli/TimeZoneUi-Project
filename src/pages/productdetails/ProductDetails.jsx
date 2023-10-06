import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../components/slider/Slider';
import '../productdetails/ProductDetails.scss';
import Spinner from '../../components/spinner/Spinner';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/CartSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const dispatch=useDispatch()
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
  
toast.success("Added to the card")
  };
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
    <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
    <button>Add To Wishlist</button>
  </div>
</div>
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
          theme="light"/>

      </div>
      ) : (
        <p><Spinner/></p>
        )}
    </div>
        </div>
            
  );
};

export default ProductDetails;

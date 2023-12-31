import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../products/Products.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addlike } from "../../redux/slice/LikeSlice";

const Products = ({ items = [] }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [item, setItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const isUserLoggedIn = !!localStorage.getItem("token");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (isUserLoggedIn) {
      const existingProduct = cartProducts.find((p) => p.id === product.id);
  
      if (existingProduct) {
        const updatedCart = cartProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        dispatch(addToCart({ ...product, quantity: 1 }));
      } else {
        dispatch(addToCart({ ...product, quantity: 1 }));
      }
    } else {
      toast.error("Please log in to add to cart");
      navigate("/login");
    }
  };
  

  const handleLikeProduct = (product) => {
    dispatch(addlike(product));
    toast.success("Product added to wishlist");
  };
  useEffect(() => {
    if (items && items.length > 0) {
      setItems(items);
    }
  }, [items]);

  if (!items) {
    return <div>Loading...</div>;
  }

  if (items.length === 0) {
    return <div>No items available</div>;
  }
  if (!item || item.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <div className="products">
      <div className="container">
        <div className="row  ">
          {item.map((product, index) => (
            <div key={index} className="products__item col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
              <div className="products__item__container  ">
                <div className="products__item__image">
                 <Link   to={`/productdetail/${product.id}`}>
                  <img
                    src={`https://localhost:7027//${product.productImage}`}
                    alt=""
                    />
                    </Link>
                  <div className="products__item__image__icon">
                    <i
                      className="fa-regular fa-heart"
                      onClick={() => handleLikeProduct(product)}
                    ></i>
                  </div>
                  <div className="products__item__image__text">
                    <p
                      onClick={() => {
                        handleAddToCart(product);
                        toast.success("Added to the card");
                      }}
                    >
                      Add To Cart
                    </p>
                  </div>
                </div>
                <div className="products__item__title  ">
                  <Link
                    className="title__link"
                    to={`/productdetail/${product.id}`}
                  >
                    <h3>{product.title}</h3>
                  </Link>
                  <p className="category">{product.category}</p>
                  <p>{product.brand}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
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
        theme="light"
      />
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import "../home/Home.scss";
import { Carousel } from "antd";
import Products from "../../components/products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../../assets/videos/Rolex Glidelock – Take it up a notch.mp4";
import Wrapper from "../../components/wrapper/Wrapper";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
const contentStyle = {};
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7027/api/Banners/GetBanner").then((res) => {
      setBanner(res.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get("https://localhost:7027/api/Products/GetProduct")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://localhost:7027/api/Sliders/GetSlider")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="section">
      <div className="sliders ">
        <div className="container">
          <Carousel afterChange={onChange}>
            {items.map((slider, index) => (
              <div>
                <h3 style={contentStyle}>
                  <div key={index} className="slider__all d-flex">
                    <div className="slider__title">
                      <div data-aos="fade-right">
                        <h1>{slider.title}</h1>
                        <p>{slider.description}</p>
                        <button>SHOP NOW</button>
                      </div>
                    </div>
                    <div className="slider__image">
                      <img
                        src={`https://localhost:7027//${slider.sliderImage}`}
                        alt={slider.title}
                        className="slider__image__img"
                      />
                    </div>
                  </div>
                </h3>
              </div>
            ))}
            <div>
              <h3 style={contentStyle}></h3>
            </div>
            <div>
              <h3 style={contentStyle}></h3>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="arrivals">
            <div className="arrivals__title">
              <h2>New Arrivals</h2>
            </div>
            <div className="arrivals__products d-flex ">
              {banner.map((item, index) => (
                <div key={index} className="arrivals__product col-4 ">
                  <div data-aos="zoom-in-up">
                    <img className=""
                      src={`https://localhost:7027//${item.bannerImage}`}
                      alt=""
                    />
                  </div>

                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>  
      <div className="gallery d-flex">
    
        <div className="gallery__image__left col-xl-6 col-lg-4 col-md-6 col-sm-6">
          <img
            className="left"
            src="https://qph.cf2.quoracdn.net/main-qimg-cbb5dff8c6b239a3caf0c2db6f23e326-lq"
            alt=""
          />
        </div>
        <div className="gallery__image__right col-6">
          <img
            className="gallery__image__right__middle"
            src="https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/CH080220/177_001.jpg"
            alt=""
          />
          <img
            className="gallery__image__right__end"
            src="https://amz.luxewatches.co.uk/app/uploads/2021/09/15091140/coral-dial.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="items">
        <div className="container">
          <div className="items__title">
            <h3>Popular Items</h3>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna <br /> aliqua. Quis ipsum suspendisse
              ultrices gravida.
            </p>
          </div>
          <div>
            {loading ? <div>Loading...</div> : <Products items={products.slice(0,6)} />}
          </div>

          <div className="items__btn">
            <Link to={"/shop"}>
              <button>VIEW MORE PRODUCTS</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="video">
        <Video>
          <source src={video} type="video/webm" />
        </Video>
      </div>
      <div className="choise">
        <div className="container">
          <div className="row">
            <div className="choise__right col-lg-5 col-md-6">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute{" "}
                <br /> irure dolor in reprehenderit in voluptate velit esse.
              </p>
              <Link to={"/shop"}>
                <button>SHOW WATCHES</button>
              </Link>
            </div>
            <div className="choise__left col-lg-6 col-md-6 col-sm-10">
              <img
                src="	https://themewagon.github.io/timezone/assets/img/gallery/choce_watch1.png"
                alt=""
              />
            </div>

            <div className="choise__left col-lg-6 col-md-6 col-sm-10">
              <img
                src="		https://themewagon.github.io/timezone/assets/img/gallery/choce_watch2.png"
                alt=""
              />
            </div>
            <div className="choise__right col-lg-5 col-md-6">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute{" "}
                <br /> irure dolor in reprehenderit in voluptate velit esse.
              </p>
              <Link to={"/shop"}>
                <button>SHOW WATCHES</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Wrapper />
    </div>
  );
};

export default Home;

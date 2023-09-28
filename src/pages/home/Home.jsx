import React from "react";
import "../home/Home.scss";
import { Carousel } from "antd";
import Products from "../../components/products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../../assets/videos/Rolex Glidelock – Take it up a notch.mp4";
import Wrapper from "../../components/wrapper/Wrapper";
AOS.init();
const contentStyle = {};
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="section">
      <div className="slider ">
        <div className="container">
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>
                <div className="slider__all d-flex">
                  <div className="slider__title">
                    <div data-aos="fade-right">
                      <h1>Select Your New Perfect Style</h1>
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea <br /> commodo
                        consequat is aute irure.
                      </p>
                      <button>SHOP NOW</button>
                    </div>
                  </div>
                  <div className="slider__image">
                    <img
                      src="	https://themewagon.github.io/timezone/assets/img/hero/watch.png"
                      alt=""
                    />
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <div className="slider__all d-flex">
                  <div className="slider__title">
                    <h1>Select Your New Perfect Style</h1>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea <br /> commodo consequat is
                      aute irure.
                    </p>
                    <button>SHOP NOW</button>
                  </div>
                  <div className="slider__image">
                    <img
                      src="	https://themewagon.github.io/timezone/assets/img/hero/watch.png"
                      alt=""
                    />
                  </div>
                </div>
              </h3>
            </div>
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
        <div className="arrivals">
          <div className="arrivals__title">
            <h2>New Arrivals</h2>
          </div>
          <div className="arrivals__products d-flex">
            <div className="arrivals__product col-4">
              <div data-aos="zoom-in-up">
                <img
                  src="	https://themewagon.github.io/timezone/assets/img/gallery/new_product1.png"
                  alt=""
                />
              </div>

              <h3>Thermo Ball Etip Gloves</h3>
              <p>$17,90</p>
            </div>
            <div className="arrivals__product col-4">
              <div data-aos="zoom-in-up">
                <img
                  src="		https://themewagon.github.io/timezone/assets/img/gallery/new_product2.png"
                  alt=""
                />
              </div>
              <h3>Thermo Ball Etip Gloves</h3>
              <p>$17,90</p>
            </div>
            <div className="arrivals__product col-4">
              <div data-aos="zoom-in-up">
                <img
                  src="		https://themewagon.github.io/timezone/assets/img/gallery/new_product3.png"
                  alt=""
                />
              </div>
              <h3>Thermo Ball Etip Gloves</h3>
              <p>$17,90</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery d-flex">
        <div className="gallery__image__left col-6">
          <img
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
          <Products />
          <div className="items__btn">
            <button>VIEW MORE PRODUCTS</button>
          </div>
        </div>
      </div>

      <div className="video">
        <Video >
          <source src={video} type="video/webm" />
        </Video>
      </div>
      <div className="choise">
        <div className="container">
          <div className="row">
            <div className="choise__right col-6">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute <br /> irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button>SHOW WATCHES</button>
            </div>
            <div className="choise__left col-6">
              <img src="	https://themewagon.github.io/timezone/assets/img/gallery/choce_watch1.png" alt="" />
            </div>
            
            <div className="choise__left col-6">
              <img src="	https://themewagon.github.io/timezone/assets/img/gallery/choce_watch1.png" alt="" />
            </div>
            <div className="choise__right col-6">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute <br /> irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button>SHOW WATCHES</button>
            </div>
          </div>
        </div>
      </div>
      <Wrapper/>
    </div>
  );
};

export default Home;

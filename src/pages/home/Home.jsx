import React from "react";
import "../home/Home.scss";
import { Carousel } from "antd";
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
              <img
                src="	https://themewagon.github.io/timezone/assets/img/gallery/new_product1.png"
                alt=""
              />
              <h3>Thermo Ball Etip Gloves</h3>
              <p>$17,90</p>
            </div>
            <div className="arrivals__product col-4">
              <img
                src="		https://themewagon.github.io/timezone/assets/img/gallery/new_product2.png"
                alt=""
              />
              <h3>Thermo Ball Etip Gloves</h3>
              <p>$17,90</p>
            </div>
            <div className="arrivals__product col-4">
              <img
                src="		https://themewagon.github.io/timezone/assets/img/gallery/new_product3.png"
                alt=""
              />
              <h3>Thermo Ball Etip Gloves</h3>
              <p>$17,90</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery d-flex">
        <div className="gallery__image__left col-6">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-cbb5dff8c6b239a3caf0c2db6f23e326-lq" alt="" />
        </div>
        <div className="gallery__image__right col-6">
            <img className="gallery__image__right__middle" src="https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/CH080220/177_001.jpg" alt="" />
            <img className="gallery__image__right__end"  src="https://amz.luxewatches.co.uk/app/uploads/2021/09/15091140/coral-dial.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

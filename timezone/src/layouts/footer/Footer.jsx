import React from "react";
import "../../layouts/footer/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__logo col-xl-3 col-lg-3 col-md-5 col-sm-6">
            <img
              src="	https://themewagon.github.io/timezone/assets/img/logo/logo2_footer.png"
              alt=""
            />
            <p>
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
              sed do eiusmod tem.
            </p>
          </div>
          <div className="footer__orderlists col-xl-2 col-lg-3 col-md-3 col-sm-5">
          <ul className="footer__orderlists__ul">
              Quick Links
              <li>About</li>
              <li>Offers & Discounts</li>
              <li>Get Coupon</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer__orderlists col-xl-2 col-lg-3 col-md-3 col-sm-5">
            <ul className="footer__orderlists__ul"> 
          

            New Products
            
              <li>Woman Cloth</li>
              <li>Fashion Accessories</li>
              <li>Man Accessories</li>
              <li>Rubber made Toys</li>
            </ul>
          </div>
          <div className="footer__orderlists col-xl-2 col-lg-3 col-md-3 col-sm-5">
          <ul className="footer__orderlists__ul">
            Support
              <li>Frequently Asked Questions</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Report a Payment Issue</li>
            </ul>
          </div>

        </div>

        <div className="footer__title d-flex ">
            <p>Copyright ©2023 All rights reserved | This template is made with  by Tehranli</p>
        <div className="footer__icons d-flex">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-behance"></i>
        <i class="fa-solid fa-globe"></i>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

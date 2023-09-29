import React from "react";
import "../navbar/Navbar.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__all">
            <div className="navbar__logo">
              <img
                src="https://themewagon.github.io/timezone/assets/img/logo/logo.png"
                alt=""
              />
            </div>
            <div className="navbar__orderlist">
              <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/shop'>Shop</Link> </li>
                <li><Link to='/about'>About</Link> </li>
                <li>Blog  </li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className="navbar__icons">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-user"></i>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
            <div className="bar">
            <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

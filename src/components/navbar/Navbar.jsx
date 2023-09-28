import React from "react";
import "../navbar/Navbar.scss";
import "bootstrap/dist/css/bootstrap.css";

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
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="navbar__icons">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-user"></i>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

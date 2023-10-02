import React from "react";
import "../navbar/Navbar.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

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
                <li><Link className="change__link" to='/'>Home</Link> </li>
                <li><Link className="change__link"  to='/shop'>Shop</Link> </li>
                <li><Link className="change__link" to='/about'>About</Link> </li>
                <li><Link className="change__link" to={'/blog'}>Blog</Link></li>
                <li><Link className="change__link" to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className="navbar__icons">
<AiOutlineSearch className="search__icon"/>
  <div className="navbar__user" id="userIcon">
   <AiOutlineUser className="search__icon"/>
    <div className="navbar__user__hover">
      <div className="user__text">
        <Link className="hover__link" to={'/register'}>
          <p>Register</p>
        </Link>
        <Link className="hover__link" to={'/login'}>
        <p>Login</p>
        </Link>
      </div>
    </div>
  </div>
  <Link className="icon__link" to={'/cartlist'}>
<SlBasket className="shop__icon"/>
  </Link>
  <Link className="icon__link" to={'/wishlist'}>
  <AiOutlineHeart className="shop__icon"/>
  </Link>
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

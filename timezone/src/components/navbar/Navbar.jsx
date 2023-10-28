import React, { useEffect } from "react";
import "../navbar/Navbar.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

import { useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function parseJwt(token) {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error parsing JWT:", error);
      return null;
    }
  }

  let currentUser = null;

  const currentToken = localStorage.getItem("token");
  if (currentToken) {
    const parsedToken = parseJwt(currentToken);
    currentUser = parsedToken
      ? parsedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ]
      : null;
  }


  function handleLogout() {
    localStorage.removeItem("token");
    sessionStorage.setItem("sweetAlertMessage", "You signed out");
    window.location.reload();
  }

  if (sessionStorage.getItem("sweetAlertMessage")) {
    Swal.fire({
      text: sessionStorage.getItem("sweetAlertMessage"),
      icon: "success",
      timer: 2000,
    });
    sessionStorage.removeItem("sweetAlertMessage");
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div>
  <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="navbar__all">
            <div className="navbar__logo">
              <Link to={"/"}>
                <img
                  src="https://themewagon.github.io/timezone/assets/img/logo/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="navbar__orderlist">
              <ul>
                <li>
                  <Link className="change__link" to="/">
                    Home
                  </Link>{" "}
                </li>
                <li>
                  <Link className="change__link" to="/shop">
                    Shop
                  </Link>{" "}
                </li>
                <li>
                  <Link className="change__link" to="/about">
                    About
                  </Link>{" "}
                </li>
                <li>
                  <Link className="change__link" to={"/blog"}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="change__link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar__icons">
              <AiOutlineSearch className="search__icon" />
              <div className="navbar__user" id="userIcon">
                <AiOutlineUser className="search__icon" />
                <div className="navbar__user__hover">
                  <div className="user__text">
                    <div className="user-name">
                      {currentToken ? ` ${currentUser}` : ""}
                    </div>

                    {currentToken != null ? (
                      <a className="logout" onClick={handleLogout} href="#">
                        Logout
                      </a>
                    ) : (
                      <ul className="login__ul">
                        <li>
                          <Link className="hover__link" to="/login">
                            Login
                          </Link>
                        </li>
                      </ul>
                    )}
                    {currentToken != null ? (
                      ""
                    ) : (
                      <ul>
                        <li>
                          <Link className="hover__link" to="/register">Register</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <Link className="icon__link" to={"/cartlist"}>
                <SlBasket className="shop__icon" />
                <sup>{totalItems}</sup>
              </Link>
              <Link className="icon__link" to={"/wishlist"}>
                <AiOutlineHeart className="shop__icon" />
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

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "../assets/css/login/login.css";

function Login() {

  const navigate = useNavigate();

  const url = "https://localhost:7027";

  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();

  async function login(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${url}/api/Auth/Login`, {
        UserName: UserName,
        Password: Password,
      });
  
      if (response.data.status === "success" || response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data));
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Signed in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
  
        let currentToken = localStorage.getItem("token");
        let currentUser;
        let userRole;
  
        if (currentToken === null) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "You need to login first",
            showConfirmButton: true,
          });
        } else {
          // Parse JWT token and get user role
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
              return null; // Eğer bir hata olursa null döndürün
            }
          }
          
          userRole =
            parseJwt(currentToken)[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];
            console.log("User Role: ", userRole);
            console.log("Current Token:", currentToken);

  
            if (userRole.includes("Admin") || userRole.includes("SuperAdmin")) {
              currentUser = currentToken;
              navigate("/dashborad");
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "You are not authorized to access this page",
                showConfirmButton: true,
                timer: 2500,
              });
            }
            
        }
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Name or password is wrong!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>

      <section
        id="login-area"
      // style={{ backgroundImage: "url(/images/login-image.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mt-5">
              <div className="main">
                <div className="box">
                  <div className="form">
                    <h2> Admin Login</h2>
                    <form onSubmit={(e) => login(e)}>
                      <div className="inputBox">
                        <input
                          type="text"
                          required="required"
                          onChange={(e) => setUserName(e.target.value)}
                        />
                        <p>Enter your Username *</p>
                        <i />
                      </div>
                      <div className="inputBox">
                        <input
                          type="password"
                          required="required"
                          id="passwordId"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <p>Enter your Password</p>
                        <i />
                      </div>
                      <div className="links">
                        <a href="">Forgot Password ?</a>
                        <div className="show">
                          <input type="checkbox" id="checkId" />
                          <a href="">Show Password</a>
                        </div>
                      </div>
                      <input type="submit" defaultValue="Sign in" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Login
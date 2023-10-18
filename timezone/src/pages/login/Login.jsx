import React, { useState } from 'react'
import Slider from '../../components/slider/Slider';
import '../login/Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';

const Login = () => {
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
    username: "",
    password: "",
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
 };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.post(
        "https://localhost:7027/api/Auth/Login",
        formData,
        config
      );
const token = response.data;
localStorage.setItem("token", JSON.stringify(token));
      toast.success("Successfully logged in.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
        toast.error("Login failed. Please try again.");
    }
  };
  return (
    <div>
        <Slider title="Login"/>
        
        <div className="login">
  <div className="container">
    <div className="login__title">
      <h2>Welcome Back!<br />Please Sign in now</h2>
      <form action="method" onSubmit={handleSubmit}>
      <input  name="username"
              value={formData.username}
              onChange={handleChange} className="login__input__text form-control mt-5" type="text" placeholder="Username" />
      <input     name="password"
              value={formData.password}
              onChange={handleChange} className="login__input__text form-control mt-3" type="password" placeholder="Password" />
      <p>Don't have an account? <Link to={'/register'}>Register now</Link> </p>
      <button className="mt-5">LOG IN</button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
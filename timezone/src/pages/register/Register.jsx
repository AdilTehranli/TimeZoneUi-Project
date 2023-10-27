  import React from 'react'
  import Slider from '../../components/slider/Slider';
  import '../register/Register.scss';
  import { Link, useNavigate } from 'react-router-dom';
  import { useState,useEffect } from 'react';
  import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';

  const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      surname: "",
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
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
          "https://localhost:7027/api/Auth/Register",
          formData,
          config
        );
        console.log(response.data);
        toast.success("Successfully Registered. Please check your email.");

        setTimeout(() => {
          navigate("/Login");
        }, 2000);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.data) {
          const { data } = error.response;
          const errorMessage = Object.values(data).flat().join(", ");
          toast.error(errorMessage);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      }
    };
    return (
      <div>
          <Slider title="Register"/>
          <div className="register">
          <div className="register__title">
        <h2>Please Register Now</h2>
        <form action="method" onSubmit={handleSubmit}>
        <input   name="name"
                value={formData.name}
                onChange={handleChange} className="register__input__text form-control " type="text" placeholder="Name" />
        <input        name="surname"
                value={formData.surname}
                onChange={handleChange} className="register__input__text form-control " type="text" placeholder="Surname" />
        <input   name="email"
                value={formData.email}
                onChange={handleChange} className="register__input__text form-control " type="email" placeholder="Email" />
        <input  name="username"
                value={formData.username}
                onChange={handleChange}className="register__input__text form-control " type="text" placeholder="Username" />
        <input          name="password"
                value={formData.password}
                onChange={handleChange} className="register__input__text form-control " type="password" placeholder="Password" />
        <input          name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange} className="register__input__text form-control " type="password" placeholder="Repeat Password" />
        <p>Already have an account? <Link to={'/login'}>Log In</Link></p>
        <button type="submit" className="mt-5">Register</button>
        </form>
        <ToastContainer/>
      </div>
          </div>
      </div>
    )
  }

  export default Register
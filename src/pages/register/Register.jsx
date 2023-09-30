import React from 'react'
import Slider from '../../components/slider/Slider';
import '../register/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
        <Slider title="Register"/>
        <div className="register">
        <div className="register__title">
      <h2>Please Register Now</h2>
      <input className="register__input__text form-control " type="email" placeholder="Email" />
      <input className="register__input__text form-control " type="text" placeholder="Username" />
      <input className="register__input__text form-control " type="password" placeholder="Password" />
      <input className="register__input__text form-control " type="password" placeholder="Repeat Password" />
      <p>Already have an account? <Link to={'/login'}>Log In</Link></p>
      <button  className="mt-5">Register</button>
    </div>
        </div>
    </div>
  )
}

export default Register
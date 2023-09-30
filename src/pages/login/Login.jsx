import React from 'react'
import Slider from '../../components/slider/Slider';
import '../login/Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <Slider title="Login"/>
        
        <div className="login">
  <div className="container">
    <div className="login__title">
      <h2>Welcome Back!<br />Please Sign in now</h2>
      <input className="login__input__text form-control mt-5" type="text" placeholder="Username" />
      <input className="login__input__text form-control mt-3" type="password" placeholder="Password" />
      <p>Don't have an account? <Link to={'/register'}>Register now</Link> </p>
      <button className="mt-5">LOG IN</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
import React from 'react'
import Slider from '../../components/slider/Slider';
import '../login/Login.scss';

const Login = () => {
  return (
    <div>
        <Slider title="Login"/>
        <div className="login">
            <div className="container">
                <div className="login__title text-center">
                    <h2>Welcome Back !<br/>
Please Sign in now</h2>

<input class="login__input__text form-control mt-5" type="text" placeholder="Username"></input>
<input class="login__input__text form-control mt-3" type="password" placeholder="Password"></input>

<button className='mt-5'>LOG IN</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
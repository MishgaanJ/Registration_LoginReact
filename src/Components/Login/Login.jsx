import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='login-form'>
      <div className='login-main'>
        <h1>Login</h1>
        <input type="text" name="fullName" id="fullName" placeholder='Full Name' />
        <input type="password" name="password" id="password" placeholder='Password' />
        <h5>Forgot password?</h5>
        <button className='btn'>Login</button>
        <span>Don't have an account? <Link to="/register" className='register'>Register here!</Link></span>
      </div>
    </div>
  );
};

export default Login;

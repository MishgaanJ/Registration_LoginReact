import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className='registration-form'>
      <div className='registration-main'>
        <h1>Register</h1>

        <input type="text" name="fullName" id="fullName" placeholder='Full Name'/>
        <input type="email" name="email" id="email" placeholder='Email' />
        <input type="phone" name="phone" id="phone" placeholder='Phone'/>
        <input type="password" name="password" id="password" placeholder='Password'/>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password'/>

        <button className='btn'>Register</button>
        
        <Link to="/" className='register'>
          <button className='btn-2'>Have an account? Sign In</button>
        </Link>

      </div>
    </div>
  );
}

export default Registration;

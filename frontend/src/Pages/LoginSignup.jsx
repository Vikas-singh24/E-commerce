import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <>
    <div className='loginSignup'>
      <div className="loginSignup_Container">
        <h1>Sign Up</h1>
        <div className="loginSignup_Fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginSignup_Login">Already have an account? <span>Login here</span></p>
        <div className="loginSignup_Agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default LoginSignup

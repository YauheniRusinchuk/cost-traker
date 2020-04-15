import React from 'react'

import './login.css'


const Login = () => {
  return (
    <div className='login'>
      <p className='login__form__title'>LOGIN</p>
      <form className='login__form'>
        <input type='email' placeholder='Email ...' />
        <input type='password' placeholder="Password ..." />
        <button>LOGIN</button> 
      </form>
    </div>
  )
} 

export default Login;
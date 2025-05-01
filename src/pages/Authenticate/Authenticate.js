import React, { useState } from 'react'
import RegisterForm from './Register/RegisterForm'
import LoginForm from './Login/LoginForm'
import './Authenticate.css'

function Authenticate() {
  const [loginForm, setLoginForm] = useState(true)
  // console.log(loginForm)
  const loginRegisterFormSwitch = (loginform) => setLoginForm(!loginForm)
  return (
    <div className='Authenticate'>
      {loginForm ? (
        <LoginForm loginRegisterFormSwitch={loginRegisterFormSwitch} />
      ) : (
        <RegisterForm loginRegisterFormSwitch={loginRegisterFormSwitch} />
      )}
    </div>
  )
}

export default Authenticate

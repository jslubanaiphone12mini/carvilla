import React, { useState } from 'react'
import LRSingleFormField from '../LRSingleFormField'
import { useAuth } from '../../../AuthContext'

function LoginForm({ loginRegisterFormSwitch }) {
  const { isLoggedIn, user, login, logout, signup, isLoading, error } =
    useAuth()

  const [showSubmitButton, setShowSubmitButton] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  const onChangeFormField = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({ ...formData, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target

    setTouched((prev) => ({ ...prev, [name]: true }))

    validateField(name, formData[name])
    showButtonOrNot()
  }

  const validateField = (name, value) => {
    let error = ''

    if (name === 'email' && validateEmail(value) === false) {
      error = 'Please enter the valid email'
    }

    if (name === 'password' && value.trim().length < 6) {
      error = 'Required! Should be at least 6 characters'
    }

    setErrors((errors) => ({ ...errors, [name]: error }))
  }

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
  }
  const showButtonOrNot = () => {
    // console.log(Object.keys(errors).length);
    if (validateEmail(formData.email) && formData.password.trim().length >= 6) {
      setShowSubmitButton(true)
    } else {
      setShowSubmitButton(false)
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    // console.log(formData)
    // console.log('login  sdfsf')
    try {
      if (!isLoggedIn) {
        // console.log("not login yet");
        await login({ ...formData })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isLoading ? (
        <div className='loader'></div>
      ) : (
        <div className='form-2025-04-22-container'>
          <div className='form-2025-04-22-card'>
            <form
              id='form-2025-04-22-loginForm'
              className='form-2025-04-22-form'
              onSubmit={formSubmitHandler}
            >
              <h2>Login</h2>
              <LRSingleFormField
                label='Email'
                name='email'
                id='add-place-email'
                type='text'
                placeholder='Email'
                value={formData.email}
                onChangeEvent={onChangeFormField}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
              />
              <LRSingleFormField
                label='Password'
                name='password'
                id='add-place-password'
                type='password'
                placeholder='Password'
                value={formData.password}
                onChangeEvent={onChangeFormField}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
              />
              <button
                type='submit'
                className={`login-register-btn ${
                  showSubmitButton ? '' : 'disabled'
                }`}
                disabled={showSubmitButton ? '' : 'disabled'}
              >
                Login
              </button>
            </form>
            <button className='switch-button' onClick={loginRegisterFormSwitch}>
              Register
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      )}
    </>
  )
}

export default LoginForm

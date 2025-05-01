import React, { useState } from 'react'
import LRSingleFormField from '../LRSingleFormField'
import { useAuth } from '../../../AuthContext'

function RegisterForm({ loginRegisterFormSwitch }) {
  const { isLoggedIn, user, login, logout, signup, isLoading, error } =
    useAuth()

  const [showSubmitButton, setShowSubmitButton] = useState(false)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    image: null
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

    if (name === 'username' && value.trim().length < 6) {
      error = 'Required! Should be at least 6 characters'
    }

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
    if (
      formData.username.trim().length >= 6 &&
      validateEmail(formData.email) &&
      formData.password.trim().length >= 6
    ) {
      setShowSubmitButton(true)
    } else {
      setShowSubmitButton(false)
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    // console.log(formData);

    try {
      if (!isLoggedIn) {
        // console.log("not login yet");
        await signup({ ...formData })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      if (file && ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        setFormData({ ...formData, image: file });
        setPreviewUrl(URL.createObjectURL(file));
        setErrorImage('');
      } else {
        setFormData({ ...formData, image: null });
        setPreviewUrl(null);
        setErrorImage('Only JPEG, JPG and PNG images are allowed.');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const [previewUrl, setPreviewUrl] = useState(null)
  const [errorImage, setErrorImage] = useState('');
  return (
    <>
      {isLoading ? (
        <div className='loader'></div>
      ) : (
        <div className='form-2025-04-22-container'>
          <div className='form-2025-04-22-card'>
            <form
              id='form-2025-04-22-registerForm'
              className='form-2025-04-22-form form-2025-04-22-hidden'
              onSubmit={formSubmitHandler}
            >
              <h2>Register</h2>

              <LRSingleFormField
                label='Username'
                name='username'
                id='add-place-username'
                type='text'
                placeholder='Username'
                value={formData.username}
                onChangeEvent={onChangeFormField}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
              />
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

              {previewUrl && <img src={previewUrl} alt="Preview" width="100" />}
              {errorImage && <p>{errorImage}</p>}
              <input name="image" type="file" accept="image/jpeg, image/jpg, image/png" onChange={handleChange} required />
              

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
                {isLoading ? 'Register...' : 'Register'}
              </button>
            </form>
            <button className='switch-button' onClick={loginRegisterFormSwitch}>
              Login
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterForm

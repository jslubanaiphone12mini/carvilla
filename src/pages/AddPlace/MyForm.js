import React, { useState } from 'react'
import './MyForm.css'
import SingleFormField from './SingleFormField'
import { useAuth } from '../../AuthContext'
import { useNavigate } from 'react-router-dom'
function MyForm() {
  const navigate = useNavigate()
  const { userID } = useAuth()
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorSubmitting, setErrorSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
  })

  const onChangeFormField = (e) => {
    const { name, value } = e.target
    setFormData((formData) => ({ ...formData, [name]: value }))
  }

  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  const handleBlur = (e) => {
    const { name } = e.target

    setTouched((prev) => ({ ...prev, [name]: true }))

    validateField(name, formData[name])
    showButtonOrNot()
  }

  const showButtonOrNot = () => {
    // console.log(Object.keys(errors).length);
    if (
      formData.title.trim().length >= 2 &&
      formData.description.trim().length >= 20 &&
      formData.address.trim().length >= 1
    ) {
      setShowSubmitButton(true)
    } else {
      setShowSubmitButton(false)
    }
  }

  const validateField = (name, value) => {
    let error = ''

    if (name === 'title' && value.trim().length < 2) {
      error = 'Required! Should be at least 2 characters'
    }

    if (name === 'description' && value.trim().length < 20) {
      error = 'Required! Should be at least 20 characters'
    }

    if (name === 'address' && value.trim().length < 1) {
      error = 'Required! Should be at least 1 characters'
    }

    setErrors((errors) => ({ ...errors, [name]: error }))
  }

  // const formSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   setErrorSubmitting('')
  //   setLoading(true)
  //   const {title, description, address} = formData;
  //   try {
  //     const response = await fetch('http://localhost:5000/api/places', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: title,
  //         desc: description,
  //         address,
  //         location: {
  //           lat: 41.8902,
  //           lng: 12.4922
  //         },
  //         creatorId: userID,
  //         placeImage: "https://picsum.photos/id/1035/800/600"
  //       })
  //     })
  //     if (!response.ok) {
  //       const errorData = await response.json()
  //       // console.log(response)
  //       setLoading(false)
  //       setErrorSubmitting(true)
  //       return null
  //     }
  //     const respon = await response.json()
  //     navigate('/', { replace: true });
  //   } catch (err) {
  //     console.log(err)
  //     setErrorSubmitting(true)
  //   }
  //   setLoading(false)
  // }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    setErrorSubmitting('')
    setLoading(true)
    const { title, description, address, image } = formData

    const data = new FormData()
    data.append('name', title)
    data.append('desc', description)
    data.append('address', address)
    data.append(
      'location',
      JSON.stringify({
        lat: 41.8902,
        lng: 12.4922,
      })
    )
    data.append('creatorId', userID)
    data.append('placeImage', formData.image)
    // console.log('Sdfsf 1')
    // return
    try {
      const response = await fetch('http://localhost:5000/api/places', {
        method: 'POST',

        body: data,
      })
      // console.log('Sdfsf 2')
      // return
      if (!response.ok) {
        const errorData = await response.json()
        // console.log(response)
        setLoading(false)
        setErrorSubmitting(true)
        return null
      }
      const respon = await response.json()
      navigate('/', { replace: true })
    } catch (err) {
      console.log(err)
      setErrorSubmitting(true)
    }
    setLoading(false)
  }

  //image code start
  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      const file = files[0]
      if (
        file &&
        ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)
      ) {
        setFormData({ ...formData, image: file })
        setPreviewUrl(URL.createObjectURL(file))
        setErrorImage('')
      } else {
        setFormData({ ...formData, image: null })
        setPreviewUrl(null)
        setErrorImage('Only JPEG, JPG and PNG images are allowed.')
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  const [previewUrl, setPreviewUrl] = useState(null)
  const [errorImage, setErrorImage] = useState('')
  //image code end

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div>
          <form className='custom-form' onSubmit={formSubmitHandler}>
            <SingleFormField
              label='Title'
              name='title'
              id='add-place-title'
              type='text'
              placeholder='Enter the Place Name'
              value={formData.title}
              onChangeEvent={onChangeFormField}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />

            {/* image code start */}
            <div className='form-group'>
              <label for='add-place-image'>Image</label>
              {previewUrl && <img src={previewUrl} alt='Preview' width='100' />}
              <input
                name='image'
                type='file'
                accept='image/jpeg, image/jpg, image/png'
                onChange={handleChange}
                required
                id='add-place-image'
              />
              {errorImage && <div className='error'>{errorImage}</div>}
            </div>

            {/* image code end */}

            <SingleFormField
              label='Description'
              name='description'
              id='add-place-description'
              type='textarea'
              placeholder='Enter the description'
              value={formData.description}
              onChangeEvent={onChangeFormField}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />

            <SingleFormField
              label='Address'
              name='address'
              id='add-place-address'
              type='text'
              placeholder='Enter the Address'
              value={formData.address}
              onChangeEvent={onChangeFormField}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />

            <button
              type='submit'
              className={`submit-btn ${showSubmitButton ? '' : 'disabled'}`}
              disabled={showSubmitButton ? '' : 'disabled'}
            >
              Add Place
            </button>
            {errorSubmitting && 'Your submission gets failed...'}
          </form>
        </div>
      )}
    </>
  )
}

export default MyForm

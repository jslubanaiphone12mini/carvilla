import React, { useEffect, useState } from 'react'
import './UpdateForm.css'
import UpdateSingleFormField from './UpdateSingleFormField'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../AuthContext'
import { useNavigate } from 'react-router-dom'

function UpdateForm() {
  const navigate = useNavigate()

  const { userID } = useAuth()
  const { pid } = useParams()
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
  })
  const [loading, setLoading] = useState(false)
  const [loadingError, setLoadingError] = useState('')

  // Simulate fetching data
  useEffect(() => {
    let updatePlaceDataFunction = async () => {
      setLoadingError('')
      setLoading(true)

      try {
        const response = await fetch(
          `http://localhost:5000/api/places/${pid}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          const errorData = await response.json()
          setLoading(false)
          setLoadingError(
            'Error while loading the Place data. Try another time...'
          )
          return null
        }
        const respon = await response.json()
        // console.log(respon.data)
        setFormData({
          title: respon.data.name,
          description: respon.data.desc,
          address: respon.data.address,
        })
      } catch (err) {
        console.log(err)
        setLoadingError(
          'Error while loading the Place data. Try another time...'
        )
      }
      setLoading(false)
    }
    updatePlaceDataFunction()
  }, [pid])

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
    // console.log(formData);

    if (
      formData.title.trim().length >= 2 &&
      formData.description.trim().length >= 20 &&
      formData.address.trim().length >= 1
    ) {
      setShowSubmitButton(true)
    } else {
      setShowSubmitButton(false)
    }
    // alert("sdf")
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

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    // console.log(formData);
    const { title, description, address } = formData
    try {
      //api code start
      const response = await fetch(`http://localhost:5000/api/places/${pid}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: title,
          desc: description,
          address,
          location: {
            lat: 41.8902,
            lng: 12.4922,
          },
          creatorId: userID,
          placeImage: 'https://picsum.photos/id/1035/800/600',
        }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        // console.log(response)
        // setLoading(false)
        // setErrorSubmitting(true)
        setLoadingError(
          'Error while updating the Place data. Try another time...'
        )
        return null
      }
      const respon = await response.json()
      navigate(-1)
      // navigate('/', { replace: true });
      //api code end
    } catch (err) {
      console.log(err)
      setLoadingError(
        'Error while updating the Place data. Try another time...'
      )
    }
  }

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div>
          {loadingError ? (
            loadingError
          ) : (
            <form className='custom-form' onSubmit={formSubmitHandler}>
              <UpdateSingleFormField
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

              <UpdateSingleFormField
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

              <UpdateSingleFormField
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
                Update Place
              </button>
            </form>
          )}
        </div>
      )}
    </>
  )
}

export default UpdateForm

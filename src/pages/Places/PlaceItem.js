import React, { useState } from 'react'
import './PlaceItem.css'
import ViewMapPopup from '../../components/general/ViewMapPopup'
import { Link } from 'react-router-dom'
import DeletePlace from '../../components/general/DeletePlace'
import { useAuth } from '../../AuthContext'
import { useNavigate } from 'react-router-dom'

function PlaceItem({ place }) {
  const navigate = useNavigate()
  const { userID } = useAuth()
  // console.log(place.id);
  const [showMap, setShowMap] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const closeViewMapFunc = () => setShowMap(false)
  const closeViewDeleteFunc = () => setShowDelete(false)
  const deleteThePlaceFunc = async () => {
    try {
      //code start
      const response = await fetch(
        `http://localhost:5000/api/places/${place._id}`,

        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (!response.ok) {
        const errorData = await response.json()
        return null
      }
      const respon = await response.json()
      navigate(-1)
      //code end
    } catch (err) {
      console.log(err)
    }
    // alert('deletingff')
    setShowDelete(false)
  }
  const closeOverlayViewMapFunc = (event) => {
    if (event.target.classList.contains('popup-overlay')) {
      setShowMap(false)
    }
  }
  const closeOverlayViewDeleteFunc = (event) => {
    if (event.target.classList.contains('delete-popup-overlay')) {
      setShowDelete(false)
    }
  }

  // console.log(place.creatorId, userID)
  return (
    <>
      <div key={place.placeId} className='place-card'>
        <img
          src={`http://localhost:5000${place.placeImage}`}
          alt={place.name}
          className='place-image'
        />
        <div className='place-details'>
          <h2>{place.name}</h2>
          <p>{place.desc}</p>
          <p>
            <strong>Location:</strong> {place.location.lat},{' '}
            {place.location.lng}
          </p>
          <p>
            <strong>Address:</strong> {place.address}
          </p>
          <p>
            <strong>Creator ID:</strong> {place.creatorId}
          </p>
          <div className='places-action-buttons'>
            <button onClick={() => setShowMap(true)}>View on Map</button>

            {userID === place.creatorId && (
              <>
                <Link to={`/updateplace/${place.id}`}>
                  <button style={{ color: 'green', borderColor: 'green' }}>
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => setShowDelete(true)}
                  style={{ color: 'red', borderColor: 'red' }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <ViewMapPopup
        showMap={showMap}
        closeViewMapFunc={closeViewMapFunc}
        closeOverlayViewMapFunc={closeOverlayViewMapFunc}
        placeName={place.name}
        location={place.location}
      />
      <DeletePlace
        showDelete={showDelete}
        closeViewDeleteFunc={closeViewDeleteFunc}
        deleteThePlaceFunc={deleteThePlaceFunc}
        closeOverlayViewDeleteFunc={closeOverlayViewDeleteFunc}
      />
    </>
  )
}

export default PlaceItem

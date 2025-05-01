import React, { useEffect, useState } from 'react'
import { useAuth } from '../../AuthContext'
import PlaceItem from './PlaceItem'

function Places() {
  const { userID } = useAuth()

  const [placesList, setPlacesList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let getPlacesByUserID = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `http://localhost:5000/api/places/user/${userID}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          const errorData = await response.json()

          setLoading(false)

          return null
        }
        const respon = await response.json()
        // console.log(respon)
        setPlacesList(respon.data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    getPlacesByUserID()
  }, [userID])

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className='places-container'>
          {placesList.filter((place) => place.creatorId === userID).length ===
          0 ? (
            <div>No data found</div>
          ) : (
            placesList
              .filter((place) => place.creatorId === userID)
              .map((place) => <PlaceItem place={place} key={place._id} />)
          )}
        </div>
      )}
    </>
  )
}

export default Places

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaceItem from './PlaceItem';

function PlaceList() {
    const { uid } = useParams();

    const [placesList, setPlacesList] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    let getPlacesByUserID = async () => {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:5000/api/places/user/${uid}`, {
        
        headers: {
          'Content-Type': 'application/json',
        }
        })
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
    getPlacesByUserID();
    }, [uid]);

  return (
    <>
    {loading ? <div className='loader'></div> : <div className="places-container">
       {placesList.filter(place => place.creatorId === uid).length === 0 ? (
           <div>No data found</div>
       ) : (
           placesList.filter(place => place.creatorId === uid).map((place) => (
               <PlaceItem place={place} key={place._id}/>
           ))
       )}
   </div>}
    </>
  )
}

export default PlaceList
import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({ id, name, image, placeCount, email }) {
  return (
    <Link className='userlist-0416-card' key={id} to={`/${id}/places`}>
      <img src={`http://localhost:5000${image}`} alt={name} className='userlist-0416-image' />
      <div className='userlist-0416-content'>
        <div className='userlist-0416-name'>
          {name} <br /> {email}
        </div>
        <div className='userlist-0416-placecount'>
          {placeCount} {placeCount > 1 ? 'Places' : 'Place'}
        </div>
      </div>
    </Link>
  )
}

export default UserItem

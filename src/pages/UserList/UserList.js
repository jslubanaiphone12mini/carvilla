import React, { useEffect, useState } from 'react'
import './UserList.css'
import UserItem from './UserItem'

function UserList() {
  const [loading, setLoading] = useState(false)

  const [userListArr, setUserListArr] = useState([])

  useEffect(() => {
    let getAllUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch('http://localhost:5000/api/users/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          const errorData = await response.json()
          return null
        }
        const respon = await response.json()
        setUserListArr(respon.users)
        // if()
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    getAllUsers()
  }, [])

  return (
    <>
      {loading ? (
        <div className='loader'></div>
      ) : (
        <div className='userlist-0416-container'>
          {/* <h2>User List</h2> */}

          <div className='userlist-0416-grid'>
            {userListArr.length === 0 ? (
              <div>No data found...</div>
            ) : (
              userListArr.map((userlistSingle) => {
                return (
                  <UserItem
                    key={userlistSingle._id}
                    id={userlistSingle._id}
                    name={userlistSingle.name}
                    image={userlistSingle.image}
                    placeCount={userlistSingle.places.length}
                    email={userlistSingle.email}
                  />
                )
              })
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default UserList

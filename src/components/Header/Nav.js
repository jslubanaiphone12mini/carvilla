import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

function Nav({ menuOpen, menuToggle, menuClose }) {
  const { isLoggedIn, logout } = useAuth()
  return (
    <nav className={`nav ${menuOpen ? 'mobile-menu-active' : ''}`}>
      <ul>
        <li>
          <NavLink
            to='/'
            onClick={menuClose}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            All Users
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to='/places'
              onClick={menuClose}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              My Places
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink
              to='/addplace'
              onClick={menuClose}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Add Place
            </NavLink>
          </li>
        )}

        {!isLoggedIn && (
          <li>
            <NavLink
              to='/authenticate'
              onClick={menuClose}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Authenticate
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            {/* <button */}
            <button onClick={logout}>
              Logout
            </button>
          </li>
        )}
        {/* <li><a href="#">All Users</a></li>
        <li><a href="#">My Places</a></li>
        <li><a href="#">Add Place</a></li>
        <li><a href="#">Authenticate</a></li> */}
      </ul>
    </nav>
  )
}

export default Nav

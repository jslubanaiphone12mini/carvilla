import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import Nav from './Nav';


function Header() {

const [menuOpen, setMenuOpen] = useState(false)

const menuToggle = () => {
    setMenuOpen(!menuOpen)
}

const menuClose = () => {
    setMenuOpen(false)
}

  return (
    <header className="header">
    {/* <input type="checkbox" id="menu-toggle" className="menu-toggle" checked/> */}
    
    <label htmlFor="menu-toggle" className="hamburger" onClick={menuToggle}>
      <span></span>
      <span></span>
      <span></span>
    </label>

    <div className="logo"><Link to="/" onClick={menuClose}>YourPlaces</Link></div>

    {/* <nav className="nav mobile-menu-active"> */}
    <Nav menuOpen={menuOpen} menuToggle={menuToggle} menuClose={menuClose}/>
    
  </header>
  )
}

export default Header
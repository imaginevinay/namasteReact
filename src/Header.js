import React from 'react'
import Logo from "./assets/logo.jpg";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './utils/UserContext';
import { useSelector } from "react-redux";

function Header() {
  const data = useContext(UserContext)
  // subscribe to store using selector
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="header">
        <div className="logo-container">
          <img className="logo" src={Logo} />
        </div>
        <div className="navItems">
          <ul>
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/about'>About Us</Link>
            <Link className='links' to='/contact'>Contact Us</Link>
            <Link className='links' to='/cart'>Cart</Link>
          </ul>
        </div>
      </div>
  )
}

export default Header
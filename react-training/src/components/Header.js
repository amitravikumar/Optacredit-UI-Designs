import React from 'react'
import logo from '../assets/images/navigation/logo.png';
import '../assets/css/header.css';

const Header = () => {
  return (
    <div className="">
      <img className="logo-img" src={logo} alt="company logo" />
    </div>
  )
}

export default Header

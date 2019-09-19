import React from 'react'
import {Logo, Navbar } from './StyledComponents'
import MissionKey from './MissionKey'
import Launches from './Launches';
import logo from '../images/logo-black.png'; 

const Header = () => {
  return (
    <Navbar className="col col-12 col-md-5 r-md-n5 h-md-100 p-5">
      <h1 className="mb-3">
        <Logo src={'logo'} className='logo' />
        <span>Launches</span>
        </h1>
        <MissionKey />
      <div className="nav-wrapper">
      <Launches />
      </div>
    </Navbar>
  )
}

export default Header

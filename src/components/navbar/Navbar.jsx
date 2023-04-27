import React from 'react'
// import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_Logo'>
          <img src={logo} alt='Logo'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import SignInOption from './SignInOption'
import LogOut from './LogOut'
import '../assets/style.css'


const Navbar = (props) => {
  return (
    <nav >
        <div className='title'>
          <img src="/img/logo.png" alt="" />
          <h1>My Weather</h1>
        </div>
        {props.loggedIn ?  <LogOut/>:<SignInOption/>}
    </nav>
  )
}

export default Navbar

import React from 'react'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm';
import "../assets/style.css"

const SignUp = () => {
    const logged=false;
  return (
    <>
      <Navbar loggedIn={logged}/>
      <SignUpForm/>
    </>
  )
}

export default SignUp

import React from 'react'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm';
import "../assets/style.css"

const SignUp = () => {
    const loggedIn=false;
  return (
    <>
      <Navbar loggedIn={loggedIn}/>
      <SignUpForm/>
    </>
  )
}

export default SignUp

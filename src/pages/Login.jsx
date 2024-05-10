import React from 'react'
import Navbar from '../components/Navbar';
import LogInForm from '../components/LogInForm';

const Login = () => {
    const loggedIn=false;
  return (
    <>
        <Navbar logDetail={loggedIn}/>
        <LogInForm />
        
    </>
  )
}

export default Login

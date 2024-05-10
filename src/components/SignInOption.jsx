import React from 'react'
import { NavLink } from 'react-router-dom'


const SignInOption = () => {
  return (
    <div className='butn'>
      <NavLink to={"/"}>
        <button type="button" className="text-white bg-blue-700 border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Log In</button>
      </NavLink>
      <NavLink to={"/signUp"}>
        <button type="button" className="text-white bg-blue-700 border border-gray-300  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
      </NavLink>
    </div>
  )
}

export default SignInOption

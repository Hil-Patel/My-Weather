import React from 'react'
import { Link } from 'react-router-dom'

const LogOut = () => {
  return (
    <div>
      <Link to={"/"}>
        <button type="button" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log Out</button>
      </Link>
    </div>
  )
}

export default LogOut

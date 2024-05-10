import React from 'react'
import Navbar from '../components/Navbar'
import WeatherCard from '../components/WeatherCard'


const Home = () => {
  return (
    <div>
        <Navbar loggedIn={true}/>
        <WeatherCard />
    </div>
  )
}

export default Home

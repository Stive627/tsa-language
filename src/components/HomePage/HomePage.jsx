import React from 'react'
import Navbar from './NavBar'
import Home from './Home'

function HomePage() {
  return (
    <div className=' w-screen overflow-hidden'>
        <Navbar/>
        <Home/>
    </ div>
  )
}

export default HomePage
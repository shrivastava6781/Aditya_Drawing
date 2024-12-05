import React from 'react'
import Navbar from './Pages/NavBar/Navbar'
import "./style.css"
import HeroSection from './Pages/Hero/HeroSection'
import MainContainer from './Pages/MainContainer/MainContainer'

const App = () => {
  return (
    <div className='main'>
      <Navbar/>
      <HeroSection/>
      <MainContainer/>
    </div>
  )
}

export default App

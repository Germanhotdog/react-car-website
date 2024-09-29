import React from 'react'
import './Herosection.css'
import '../App.css'
import video from '../video/garage.mp4'


function Herosection_garage() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted/>

      <h1 className='video-title'>About Us </h1> 

    </div>
  )
}

export default Herosection_garage

import React from 'react'
import './Herosection.css'
import '../App.css'
import video from '../video/carpage.mp4'


function Herosection_carpage() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted/>

      <h1 className='video-title' style={{color:'#CD5C5C'}}>Second-hand Car </h1> 

    </div>
  )
}

export default Herosection_carpage
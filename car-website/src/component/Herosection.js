import React from 'react'
import './Herosection.css'
import '../App.css'
import video from '../video/car-video.mp4'
import { Link } from 'react-router-dom'


function Herosection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted/>

      <h1 className='video-title'>CarDeals..Do we have a deal? </h1> 
      
      <div className="hero-btns">
        <Link to="/pages/Carpage"><button class="btn btn-outline-light">See More</button></Link>
        
      </div>

    </div>
  )
}

export default Herosection

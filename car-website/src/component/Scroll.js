import React from 'react'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Herosection_garage from './Herosection_garage'
import Footer from './Footer'
import './Scroll.css'
import './grid.css'
import icon1 from '../image/car-icon.png'
import icon2 from '../image/motor.png'
import icon3 from '../image/company.png'
import { Link } from 'react-router-dom'
import cartoon1 from '../image/cartoon1.png'
import cartoon2 from '../image/cartoon2.png'
import carpark from '../image/car_park.png'
import carpark2 from '../image/car_park2.png'

function Scroll(){
    const gridData2 = [
        { id: 1, name: 'Second-hand Car' , picture:<img src={icon1} alt='car-icon'/>,link:'/', text: 'Find the perfect second-hand car a breeze. Explore a wide selection of quality pre-owned vehicles, connect with sellers, and make informed decisions effortlessly.'},
        { id: 2, name: 'Second-hand Motorcycle' ,picture:<img src={icon2} alt='motor-icon'/>,link:'/', text: 'Cater to motorcycle enthusiasts and help you find your dream two-wheeler with ease. Connect with sellers, and make informed decisions effortlessly.'},
        { id: 3, name: 'Car enquiry' ,picture:<img src={icon3} alt='company-icon'/>,link:'/pages/Aboutus', text: 'We provide comprehensive information, personalized recommendations, and reliable support to make your car buying experience seamless and satisfying.'},
      ];

    return(
        <>
                
            <Parallax pages = {5} className='parallax-container'>
                <ParallaxLayer>
                <Herosection_garage />
                </ParallaxLayer>

                <ParallaxLayer offset={0.9} factor={1.5} speed={0.5} className='parallax-item'  style={{backgroundImage: `url(${carpark})`, backgroundSize:"cover"}}>
                <h1>Welcome to CarDeals</h1>
                <p>Your ultimate destination for quality second-hand cars.
                     We understand that buying a used car can be a significant decision,
                      and our mission is to make the process as smooth and enjoyable as
                      possible for our valued customers.</p>

                <div className="grid-container">
                {gridData2.map((item) => (
                        <div key={item.id} className="grid-item2">
                            {item.picture}
                            <h4>{item.name}</h4>
                            <p>{item.text}</p>
                        </div>

                    
                ))}
                 </div>

                <h1 style={{color:'white'}}>Your satisfaction is our top priority.</h1>
                <p style={{color:'white'}}>We believe that buying a used car should be a pleasant
                     and hassle-free experience. That's why we go the extra
                      mile to ensure that your purchase is smooth and worry-free.
                       From the moment you browse our website to the moment you drive 
                       off with your new car, we're here to provide support, guidance,
                        and exceptional service.</p>
                
                </ParallaxLayer>
                    
                <ParallaxLayer sticky={{start:1.65, end:1.65}} className='parallax-item'>
                    <div className='cartoon'><img src={cartoon1}/></div>
                    
                </ParallaxLayer>

                <ParallaxLayer sticky={{start:2.3, end:2.3}} className='parallax-item'>
                    <div className='cartoon2'><img src={cartoon2}/></div>
                    
                </ParallaxLayer>


                <ParallaxLayer offset={1.9} speed={0.5} className='parallax-item2' style={{backgroundImage: `url(${carpark2})`, backgroundSize:"cover",color:'white'}}>

                <h1>We also understand that financing plays a crucial role in the car buying process.</h1>
                <p>That's why CarDeal offers flexible financing solutions tailored to your needs.
                     Our partnerships with trusted financial institutions enable us to secure competitive rates and favorable terms,
                      making your purchase more affordable and convenient.</p>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5} className='parallax-item'>
                <h1>Experience the CarDeal difference today.</h1>
                <p>Visit our showroom, browse our online inventory, or contact our dedicated team.
                     Let us help you find the perfect second-hand car that exceeds your expectations and fits your lifestyle.</p>

                
                </ParallaxLayer>

                <ParallaxLayer offset={4} speed={0.5}>
                <Footer />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default Scroll
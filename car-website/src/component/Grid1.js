import React from 'react'
import './grid.css'
import '../App.css'
import picture1 from '../image/AE86.png'
import picture2 from '../image/impreza.png'
import picture3 from '../image/911turboS.png'
import picture4 from '../image/lancer_evo.png'
import picture5 from '../image/488.png'
import picture6 from '../image/GR86.png'
import icon1 from '../image/car-icon.png'
import icon2 from '../image/motor.png'
import icon3 from '../image/company.png'
import { Link } from 'react-router-dom'


function Grid1(){
    const gridData = [
        { id: 1, name: 'Sprinter Trueno AE86' ,picture : <img src={picture1} alt='AE86'/>, text: '$354,200'},
        { id: 2, name: '2004 Subaru Impreza WRX STI' ,picture : <img src={picture2} alt='impreza'/>, text: '$234,300'},
        { id: 3, name: 'Porsche 911 Turbo S' ,picture : <img src={picture3} alt='911'/>, text: '$3,829,000'},
        { id: 4, name: 'Mitsubishi Lancer Evolution III' ,picture : <img src={picture4} alt='lancer'/>, text: '$168,000'},
        { id: 5, name: 'Ferrari 488 Spider ' ,picture : <img src={picture5} alt='488'/>, text: '$4,120,000'},
        { id: 6, name: 'Toyota GR86' ,picture : <img src={picture6} alt='911'/>, text: '$428,000'},
      ];

      const gridData2 = [
        { id: 1, name: 'Second-hand Car' , picture:<img src={icon1} alt='car-icon'/>,link:'/pages/Carpage', text: 'Find the perfect second-hand car a breeze. Explore a wide selection of quality pre-owned vehicles, connect with sellers, and make informed decisions effortlessly.'},
        { id: 2, name: 'Second-hand Motorcycle' ,picture:<img src={icon2} alt='motor-icon'/>,link:'/', text: 'Cater to motorcycle enthusiasts and help you find your dream two-wheeler with ease. Connect with sellers, and make informed decisions effortlessly.'},
        { id: 3, name: 'About Us' ,picture:<img src={icon3} alt='company-icon'/>,link:'/pages/Aboutus', text: 'Our mission is to create a trusted and user-friendly platform that simplifies the buying and selling process, while fostering a vibrant community of automotive enthusiasts.'},
      ];
      

      return ( 
        
        <div>
            <br/>
            <div className="grid-container">
                {gridData2.map((item) => (
                    <Link to={item.link}>
                        <div key={item.id} className="grid-item2">
                            {item.picture}
                            <h4>{item.name}</h4>
                            <p>{item.text}</p>
                            <button class="btn btn-outline-dark">See More</button>
                        </div>
                    </Link>
                    
                ))}
            </div>

            <br/>
            <h1 className='title'>Recent hits</h1>
            <div className="grid-container">
                {gridData.map((item) => (

                        <div key={item.id} className="grid-item">
                            {item.picture}
                            <h4>{item.name}</h4>
                            <p>{item.text}</p>
                            
                                <div className="grid-btns">
                                    <Link to="/">
                                    <button class="btn btn-outline-dark">See More</button>
                                    </Link>
                                </div>
                            
                        </div>
                    
                    
                ))}
            </div>
            <br/>

        </div>

      );
}


export default Grid1


import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/carlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navi.css';





function Navi(){

    return(
        
        <nav className="navbar">
            <div className='nav-container'>
                <Link to="/" className="navbar-logo">
                <img src={logo} width={'20%'} />
                
                </Link>
                <ul>
                    <li className = "nav-item">
                    <Link to="/pages/Carpage" className = "nav-link">
                        Cars
                    </Link>
                    </li>

                    <li className = "nav-item">
                    <Link to="" className = "nav-link">
                        Motorcycle
                    </Link>  
                    </li>                   

                    <li className = "nav-item">
                    <Link to="/pages/Aboutus" className = "nav-link">
                        About Us
                    </Link>

                    
                    </li>   

                    <li className = "nav-item">
                    <Link to="/" className = "nav-link">
                        Sign Up
                    </Link>

                    
                    </li>     

                </ul>
            </div> 
        </nav>

    )

}

export default Navi
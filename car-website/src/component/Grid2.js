import React,{useState} from 'react'
import car_records from '../records/car_records.json';
import './Grid2.css'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import icon1 from '../image/car-icon.png'
import icon2 from '../image/motor.png'
import icon3 from '../image/company.png'
import { Link } from 'react-router-dom'


function Grid2(){
    const [search, setSearch] = useState('')
    const gridData2 = [
        { id: 1, name: 'Second-hand Car' , picture:<img src={icon1} alt='car-icon'/>,link:'/pages/Carpage', text: 'Find the perfect second-hand car a breeze. Explore a wide selection of quality pre-owned vehicles, connect with sellers, and make informed decisions effortlessly.'},
        { id: 2, name: 'Second-hand Motorcycle' ,picture:<img src={icon2} alt='motor-icon'/>,link:'/', text: 'Cater to motorcycle enthusiasts and help you find your dream two-wheeler with ease. Connect with sellers, and make informed decisions effortlessly.'},
        { id: 3, name: 'About Us' ,picture:<img src={icon3} alt='company-icon'/>,link:'/pages/Aboutus', text: 'Our mission is to create a trusted and user-friendly platform that simplifies the buying and selling process, while fostering a vibrant community of automotive enthusiasts.'},
      ];

      return ( 
        <>  
            <br/>
            <Form>
                <h1>Search:</h1>
                <InputGroup className='my-3'>
                    <Form.Control onChange={(e)=> setSearch(e.target.value) }
                    placeholder='Search contacts (Please type in lower case)'/>
                </InputGroup>
                
            </Form>

            <div className='grid-container'>
            {car_records.filter((record) => {
                return search.toLowerCase() === '' 
                ? record : record.car_name.toLowerCase().includes(search);
            }).map(record =>{
                return(
                    <div >
                        <div className='grid-item1'>
                            <h4>{record.car_name}</h4>
                            <p>{record.car_brand}</p>
                            <p>${record.car_price}</p>
                        </div>
                    </div>
                )
            })}

            </div>

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
            
            <br></br>
        </>
        

      );
}


export default Grid2


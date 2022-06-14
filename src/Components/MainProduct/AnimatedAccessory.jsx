import React from 'react';
import { Link } from 'react-router-dom';
import './AnimatedAccessory.css';

//accessory ad on homepage
const AnimatedAccessory = () => {
  return (
        <div className='accessory-container'>
        <h1 className='maintext2'>Shop Accessories</h1>
        <Link to="/categories">
        <button className='buy-button'>Buy Now</button>
        </Link>
        <br></br>
        <img className='main-gif' src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2020/10/14/Apple_iPhone12Pro-back-camera-magsafe-charger_10132020.gif?quality=80&resize=1280,720"></img>
        </div>
  )
}

export default AnimatedAccessory
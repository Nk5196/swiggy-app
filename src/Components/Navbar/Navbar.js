// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import About from '../About/About';

function Navbar() {
  return (
    <div className='Navbar'>
      <img src='https://cdn-images-1.medium.com/max/1200/1*v5SYqjYEdQMPIwNduRrnCw.png'></img>
     
      <div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        
        <Link to="/contact"><li>Contact Us</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;

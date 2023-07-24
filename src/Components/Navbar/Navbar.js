// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <img src='https://cdn-images-1.medium.com/max/1200/1*v5SYqjYEdQMPIwNduRrnCw.png'></img>
      <div>
        <input placeholder='Search' />
      </div>
      <div>
      <ul>
        <li>Login</li>
        <li>Help</li>
        <li>About</li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;

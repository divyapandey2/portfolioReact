import React, { useState } from 'react';
import dklogo from '../../Assets/dklogo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='logo'><img src={dklogo} alt='' /></div>
      <div className={
            showMenu ? "mobile-menu" : "menu"
          }> 
        <ul>
          <li>
            <a href="/" style={{ textDecoration: 'none' }}>Home</a>
          </li>
          <li>
            <a href="/project" style={{ textDecoration: 'none' }}>Projects</a>
          </li>
          <li>
            <a href="/service" style={{ textDecoration: 'none' }}>Services</a>
          </li>
          <li>
            <a href="/about" style={{ textDecoration: 'none' }}>About</a>
          </li>
          <li>
            <a href="/contact" style={{ textDecoration: 'none' }}>Contact</a>
          </li>
        </ul>
      </div>
      <div className='hamburger'>
        <a href="#" onClick={() => setMenu(!showMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

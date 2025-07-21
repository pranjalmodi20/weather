import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div className='logo'>Weather App</div>
            <ul className='nav-links'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/settings">SETTINGS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
// Import Library
import React from 'react';
import { Button } from '@mui/material';
// Import Asset
import Logo from '../../Asset/Logo.svg';

function Navbar(){
    return(
        <header className='w-full pt-6 px-32 flex justify-between bg-darkblue-50'>
            <a href='/user/landing'><img src={Logo} alt=""/></a>
            <nav className='flex'>
                <ul className='flex'>
                    <li><a href="##" className='nav-link'>Our Services</a></li>
                    <li><a href="##" className='nav-link'>Why Us</a></li>
                    <li><a href="##" className='nav-link'>Testimonial</a></li>
                    <li><a href="##" className='nav-link'>FAQ</a></li>
                </ul>
                <Button href='/register' variant="contained" color='success'>Register</Button>
            </nav>
        </header>
    )
}

export default Navbar
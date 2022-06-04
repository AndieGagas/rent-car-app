// -------------------- Library React --------------------
import React from 'react';
// -------------------- Import Icons & Asset --------------------
import Facebook from '../../Asset/icon_facebook.svg'
import Instagram from '../../Asset/icon_instagram.svg'
import Mail from '../../Asset/icon_mail.svg'
import Twitch from '../../Asset/icon_twitch.svg'
import Twitter from '../../Asset/icon_twitter.svg'
import Logo from '../../Asset/Logo.svg';

function Footer(){
    return(
        <footer className='w-10/12 flex justify-between m-auto'>
            <address className='w-1/5'>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </address>
            <nav className='w-1/12'>
                <p><b>Our services</b></p>
                <p><b>Why Us</b></p>
                <p><b>Testimonial</b></p>
                <p><b>FAQ</b></p>
            </nav>
            <div className='w-3/12'>
                <p>Connect with us</p>
                <div className='flex space-x-4'>
                    <img src={Facebook} alt=""/>
                    <img src={Instagram} alt=""/>
                    <img src={Mail} alt=""/>
                    <img src={Twitch} alt=""/>
                    <img src={Twitter} alt=""/>
                </div>
            </div>
            <div className='w-3/12'>
                <p>Copyright Binar 2022</p>
                <img src={Logo} alt="" />
            </div>
        </footer>
    )
}

export default Footer
// Import Library
import React from 'react';
// Import Asset
import Car from '../../Asset/Img-Car.svg'

export default function HeroSection(){
    return(
        <section className='flex justify-between pt-9 pl-32 bg-darkblue-50'>
            <div className='w-5/12 mt-20'>
                <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className='w-11/12'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
            <img src={Car} alt="" />
        </section>
    )
}
import React from "react";
import imgServices from '../../Asset/img_service.svg'
import Check from '../../Asset/fi_checklist.svg'

export default function OurServices(){
    return(
        <div className="my-28 mx-52 flex justify-between">
            <img src={imgServices} alt="" />
            <section className="max-w-md space-y-6 my-auto">
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi 
                    mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul className="space-y-4">
                    <li className="flex space-x-4">
                        <img src={Check} alt="" />
                        <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                    </li>
                    <li className="flex space-x-4">
                        <img src={Check} alt="" />
                        <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                    </li>
                    <li className="flex space-x-4">
                        <img src={Check} alt="" />
                        <span>Sewa Mobil Jangka Panjang Bulanan</span>
                    </li>
                    <li className="flex space-x-4">
                        <img src={Check} alt="" />
                        <span>Gratis Antar - Jemput Mobil di Bandara</span>
                    </li>
                    <li className="flex space-x-4">
                        <img src={Check} alt="" />
                        <span>Layanan Airport Transfer / Drop In Out</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}
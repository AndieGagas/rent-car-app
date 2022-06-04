import { Paper } from "@mui/material";
import React from "react";
import Professional from '../../Asset/icon_professional.svg'
import Price from '../../Asset/icon_price.svg'
import Hours from '../../Asset/icon_24hrs.svg'
import Complete from '../../Asset/icon_complete.svg'

export default function WhyUs(){
    return(
        <div className="px-36">
            <h2>Why Us?</h2>
            <p className="mb-10">Mengapa harus pilih Binar Car Rental?</p>
            <div className="flex space-x-8">
                <Paper variant="outlined" className="p-6 w-1/4 space-y-4">
                    <img src={Complete} alt=""/>
                    <h4>Mobil Lengkap</h4>
                    <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </Paper>
                <Paper variant="outlined" className="p-6 w-1/4 space-y-4">
                    <img src={Price} alt=""/>
                    <h4>Harga Murah</h4>
                    <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </Paper>
                <Paper variant="outlined" className="p-6 w-1/4 space-y-4">
                    <img src={Hours} alt=""/>
                    <h4>Layanan 24 Jam</h4>
                    <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </Paper>
                <Paper variant="outlined" className="p-6 w-1/4 space-y-4">
                    <img src={Professional} alt=""/>
                    <h4>Sopir Profesional</h4>
                    <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </Paper>
            </div>
        </div>
    )
}
// -------------------- Library React --------------------
import React from 'react';
// -------------------- Library Material UI & Material Icon --------------------
import { Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Information(){
    return(
    <section className='w-7/12'>
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <p><b>Tentang Paket</b></p>
                <p className='mb-2 text-sm'>Include</p>
                <ul className='item-list mb-4'>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
                <p className='mb-2 text-sm'>Exclude</p>
                <ul className='item-list mb-6'>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <Accordion elevation={0} >
                    <AccordionSummary
                    expandIcon      = {<ExpandMoreIcon />}
                    className       ='p-0'
                    >
                        <p className='m-0'><b>Refund, Reschedule, Overtime</b></p>
                    </AccordionSummary>
                    <AccordionDetails className='p-0'>
                    <ul className='item-list'>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
        <div className='flex justify-end'>
            <Button variant="contained" href='/user/listCar' color='info'>Kembali</Button>
        </div>
    </section>
    )
}
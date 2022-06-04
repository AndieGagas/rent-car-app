// -------------------- Library React --------------------
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

// -------------------- React Redux --------------------
import { useDispatch ,useSelector } from 'react-redux';
import { getDetailCar } from '../../Store/detailCarSlice';

// -------------------- Library Material UI & Icons --------------------
import { Card, CardContent, Button, Skeleton, Modal, Box, Fade } from '@mui/material';
import Calendar from '../../Asset/fi_calendar.svg'
import Settings from '../../Asset/fi_settings.svg'
import Users from '../../Asset/fi_users.svg'

export default function CarCard(){

    const { getPassenger, getTransmissionType, getProductionYear } = useSelector((state) => state.listCar )
    const { detailCar, loading }    = useSelector((state) => state.detailCar )
    const dispatch  = useDispatch()
    const {id}      = useParams();
    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(getDetailCar(id))
    }, [dispatch, id])
    
    return(
        <Card className='w-5/12 h-max'>
            { loading &&
                <section className='p-6'>
                    <Skeleton variant="rectangular" className='w-full h-40 mb-14'/>
                    <Skeleton variant='text' className='h-16 mb-9 w-4/5'/>
                    <Skeleton variant="rectangular" className='w-full h-20'/>
                </section>     
            }
            { !loading && 
                <CardContent className='p-6'>
                    <img role='button' onClick={() => {setModal(true)}} src={detailCar.image} alt="" className='mb-14 max-h-40 m-auto'/>
                    <p className='mb-2'><b>{detailCar.name} / {detailCar.category}</b></p>
                    <ul className='flex mb-12 space-x-4'>
                        <li className='flex space-x-2'>
                            <img src={Calendar} alt="" />
                            <span>{getPassenger}</span>
                        </li>
                        <li className='flex space-x-2'>
                            <img src={Settings} alt="" />
                            <span>{getTransmissionType}</span>
                        </li>
                        <li className='flex space-x-2'>
                            <img src={Users} alt="" />
                            <span>{getProductionYear}</span>
                        </li>
                    </ul>
                    <span className='flex justify-between'>
                        <p>Total</p>
                        <p><b>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(detailCar.price)}</b></p>
                    </span>
                    <Button href='/user/invoice' variant="contained" color='success' className='w-full'>Lanjutkan Pembayaran</Button>
                </CardContent>   
            }
            <Modal 
                id              ='root' 
                open            ={modal}
                BackdropProps   ={{timeout: 500}}
                onClose         ={() => {setModal(false)}} 
                aria-labelledby ='modal-image'>
                <Fade in={modal}>
                    <Box className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-max'>
                        <Card>
                        <img id='modal-image' src={detailCar.image} alt="" />
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </Card>
    )
}
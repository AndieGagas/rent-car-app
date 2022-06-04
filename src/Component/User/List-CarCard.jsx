// Import Library
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"; 
// Import Library Material UI
import { Card, CardContent, CardActions, Button } from '@mui/material';

// Import Icon
import Calendar from '../../Asset/fi_calendar.svg'
import Settings from '../../Asset/fi_settings.svg'
import Users from '../../Asset/fi_users.svg'

export default function CarCard(props){

    const { getPassenger, getTransmissionType, getProductionYear } = useSelector((state) => state.listCar )

    // Handle Button Navigate
    const navigate = useNavigate()
    function handleNavigate(){
        navigate(`/user/detail/${props.id}`, {state: true})
    }

    return(
        <Card className='max-w-xs'>
            <CardContent className='p-6'>
                <img src={props.image} alt="" className='mb-4 max-h-34 m-auto' />
                <article>
                    <p className='mb-2 text-sm'>{props.name} / {props.category}</p>
                    <h4 className='mb-2'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(props.price)} / hari</h4>
                    <p className='text-justify text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </article>
                <ul className='space-y-4 mb-6'>
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
                <CardActions>
                    <Button variant="contained" onClick={handleNavigate} color='success' className='container'>Pilih Mobil</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
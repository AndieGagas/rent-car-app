import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import Key from '../../Asset/fi_key.svg'
import Clock from '../../Asset/fi_clock2.svg'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from "axios";

export default function CarCard(props){

    const handleDelete = async() => {
        try {
            await axios({
                method      : "delete",
                url         : `https://rent-car-appx.herokuapp.com/admin/car/${props.id}`
            })
        } catch (error) {
            throw new Error(error)
        }finally{
            window.location.reload()
        }
    }

    return(
        <Card className='w-full'>
            <CardContent className='p-6 space-y-5'>
                <img src={props.image} alt="" className='max-h-40 m-auto' />
                <article>
                    <p className='mb-2 text-sm'>{props.name} / {props.category}</p>
                    <h4 className='mb-2'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(props.price)} / hari</h4>
                </article>
                <ul className='space-y-4'>
                    <li className='flex space-x-2 text-sm'>
                        <img src={Key} alt="" />
                        <span>Start rent - Finish rent</span>
                    </li>
                    <li className='flex space-x-2 text-sm'>
                        <img src={Clock} alt="" />
                        <span>Updated at 4 Apr 2022, 09.00</span>
                    </li>
                </ul>
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outlined" onClick={handleDelete} color="error" startIcon={<DeleteOutlinedIcon/>}>Delete</Button>
                    <Button variant="contained" color="success" startIcon={<EditOutlinedIcon/>}>Edit</Button>
                </div>
            </CardContent>
        </Card>
    )
}
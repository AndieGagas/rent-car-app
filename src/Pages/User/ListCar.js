// -------------------- Library React --------------------
import React, { Fragment, useEffect } from 'react';

// -------------------- React Redux --------------------
import { useDispatch, useSelector } from 'react-redux';
import { getListCar } from '../../Store/listCarSlice';

// -------------------- Import Component --------------------
import Navbar from "../../Component/User/Navbar";
import Footer from "../../Component/User/Footer";
import CarCard from '../../Component/User/List-CarCard';
import FormSelect from '../../Component/User/FormSelect';
import SkeletonCar from '../../Component/User/SkeletonCar';

export default function ListCar(){

    const dispatch  = useDispatch()
    const { listCar, loading }    = useSelector((state) => state.listCar )

    useEffect(() => {
        dispatch(getListCar())
    }, [dispatch])

    return(
        <Fragment>
            <Navbar/>
            <div className='h-48 bg-darkblue-50'/>
            <section className='absolute top-48 container'>
                <FormSelect/>
            </section>
            <section className='grid grid-cols-3 gap-6 w-max mt-28 mb-44 m-auto'>
                { loading && [1,2,3,4,5,6].map((load) => 
                    <SkeletonCar key={load}/>
                )}
                { !loading && listCar.length > 0 && listCar.map((car) => 
                    <CarCard
                    key     = {car.id}
                    id      = {car.id}
                    name    = {car.name}
                    category= {car.category}
                    price   = {car.price}
                    image   = {car.image}
                    />   
                )}
            </section>
            <Footer/>
        </Fragment>
    )
}
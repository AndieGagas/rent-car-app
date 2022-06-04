// -------------------- Library React --------------------
import React, { Fragment } from 'react';

// -------------------- Import Component --------------------
import Navbar from "../../Component/User/Navbar";
import Footer from "../../Component/User/Footer";
import FormSelect from '../../Component/User/FormSelect';
import Information from '../../Component/User/Detail-Information';
import DetailCar from '../../Component/User/Detail-CarCard';

export default function DetailPage(){
    return(
        <Fragment>
            <Navbar/>
            <div className='h-48 bg-darkblue-50'/>
            <section className='absolute top-48 container'>
                <FormSelect/>
            </section>
            <section className='w-9/12 flex space-x-8 m-auto mt-26 mb-24'>
                <Information/>
                <DetailCar/>
            </section>
            <Footer/>
        </Fragment>
    )
}
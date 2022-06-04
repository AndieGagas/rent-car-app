// -------------------- Library React --------------------
import React, {Fragment } from 'react';

// -------------------- Import Component --------------------
import Navbar from "../../Component/User/Navbar";
import HeroSection from "../../Component/User/Landing-HeroSection";
import Footer from "../../Component/User/Footer";
import FormSelect from '../../Component/User/FormSelect';
import OurServices from '../../Component/User/Landing-OurServices';
import WhyUs from '../../Component/User/Landing-WhyUs';

function LandingPage(){
    return(
        <Fragment>
            <Navbar/>
            <HeroSection/>
            <section className='absolute top-114 container'>
                <FormSelect/>
            </section>
            <OurServices/>
            <WhyUs/>
            <Footer/>
        </Fragment>
    )
}

export default LandingPage
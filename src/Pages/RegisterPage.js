import React from "react";
import ImageLogin from '../Asset/image-2.svg'
import FormRegister from "../Component/LoginRegister/FormRegister";


function RegisterPage(){
    return(
        <div className="grid grid-cols-12">
            <div className='col-span-8 max-h-screen overflow-hidden'>
                <img src={ImageLogin} alt=""/>
            </div>
            <FormRegister/>
        </div>
    )
}

export default RegisterPage
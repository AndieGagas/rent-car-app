import React from "react";
import ImageLogin from '../Asset/image-2.svg'
import FormLogin from "../Component/LoginRegister/FormLogin";



function LoginPage(){
    return(
        <div className="grid grid-cols-12">
            <div className='col-span-8 max-h-screen overflow-hidden'>
                <img src={ImageLogin} alt=""/>
            </div>
            <FormLogin/>
        </div>
    )
}

export default LoginPage
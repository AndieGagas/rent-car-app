import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from '../../Asset/Logo.svg'
import GoogleLogin from "react-google-login";
import { postUserLogin } from "../../Store/userLoginSlice";

function FormLogin(){
    const navigate  = useNavigate()
    const [email, setEmail]                 = useState('')
    const [password, setPassword]           = useState('')
    const dispatch = useDispatch()

    const data = {email, password}

    const responseGoogle = (response) => {
        localStorage.setItem("token", response.accessToken);
        console.log(response.accessToken);
      };
    

    function handleLogin(e){
        e.preventDefault()
        if(email === 'admin@admin.com'){
            navigate('/admin/listCar')
        }else{
            navigate('/user/landing')
        }
        dispatch(postUserLogin(data))
    }

    return(
        <section className="col-span-4 m-auto w-9/12">
            <img src={Logo} alt="" className="mb-8"/>
            <h2 className="mb-8">Welcome Back!</h2>
            <form autoComplete="off" method="POST" onSubmit={handleLogin} className="mb-8">
                <FormControl fullWidth color="info" className="mb-4">
                    <FormLabel className="mb-2">Email</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="email"
                        name        ="email"
                        value       ={email}
                        onChange    ={e => setEmail(e.target.value)}
                        placeholder ="Contoh: johndee@gmail.com"/>
                </FormControl>
                <FormControl fullWidth color="info" className="mb-8">
                    <FormLabel className="mb-2">Password</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="password"
                        name        ="password"
                        value       ={password}
                        onChange    ={e => setPassword(e.target.value)}
                        placeholder ="6+ karakter"/>
                </FormControl>
                <Button type="submit" variant="contained" color="info" fullWidth className="capitalize">Sign In</Button>
                <GoogleLogin
                    clientId="104682645216-tb3e262c9t89kr536spqedig8142rssa.apps.googleusercontent.com"
                    className="w-full flex justify-center mt-6 border text-sm rounded-sm "
                    buttonText="Sign in with google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
            </form>
            <div className="flex justify-center">
                <p className="mb-0 mr-2">Don’t have an account?</p>
                <span><Button color="info" onClick={() => navigate('/register')} className="p-0">Sign Up for free</Button></span>
            </div>
        </section>
    )
}

export default FormLogin
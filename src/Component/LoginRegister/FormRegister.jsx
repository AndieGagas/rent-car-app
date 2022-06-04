import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from '../../Asset/Logo.svg'
import { postUserRegister } from "../../Store/userRegisterSlice";

function FormRegister(){
    const navigate  = useNavigate()
    const [firstname, setFirstName]         = useState('')
    const [lastname, setLastName]           = useState('')
    const [email, setEmail]                 = useState('')
    const [password, setPassword]           = useState('')
    const [confPassword, setConfPassword]   = useState('')
    const dispatch = useDispatch()

    const data      = {firstname, lastname, email, password, password_confirmation: confPassword}

    function handleRegister(e){
        e.preventDefault()
        dispatch(postUserRegister(data))
    }

    return(
        <section className="col-span-4 m-auto w-9/12 space-y-8">
            <img src={Logo} alt=""/>
            <h2>Sign Up</h2>
            <form autoComplete="off" method="POST" onSubmit={handleRegister} className='space-y-3'>
                <FormControl fullWidth color="info">
                    <FormLabel className="mb-2">First Name*</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="text"
                        name        ="first_name"
                        value       ={firstname}
                        onChange    ={e => setFirstName(e.target.value)}
                        placeholder ="Nama Depan"/>
                </FormControl>
                <FormControl fullWidth color="info">
                    <FormLabel className="mb-2">Last Name*</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="text"
                        name        ="last_name"
                        value       ={lastname}
                        onChange    ={e => setLastName(e.target.value)}
                        placeholder ="Nama Belakang"/>
                </FormControl>
                <FormControl fullWidth color="info">
                    <FormLabel className="mb-2">Email*</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="email"
                        name        ="email"
                        value       ={email}
                        onChange    ={e => setEmail(e.target.value)} 
                        placeholder ="Contoh: johndee@gmail.com"/>
                </FormControl>
                <FormControl fullWidth color="info">
                    <FormLabel className="mb-2">Create Password*</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="password"
                        name        ="password" 
                        value       ={password}
                        onChange    ={e => setPassword(e.target.value)} 
                        placeholder ="6+ karakter"/>
                </FormControl>
                <FormControl fullWidth color="info">
                    <FormLabel className="mb-2">Password Confirmation*</FormLabel>
                    <OutlinedInput 
                        required 
                        type        ="password"
                        name        ="password_confirmation" 
                        value       ={confPassword}
                        onChange    ={e => setConfPassword(e.target.value)} 
                        placeholder ="6+ karakter"/>
                </FormControl>
                <Button type="submit" variant="contained" color="info" fullWidth className="capitalize">Sign Up</Button>
            </form>
            <div className="flex justify-center">
                <p className="mb-0 mr-2">Already have an account?</p>
                <span><Button color="info" onClick={() => navigate('/')} className="p-0">Sign In here</Button></span>
            </div>
        </section>
    )
}

export default FormRegister
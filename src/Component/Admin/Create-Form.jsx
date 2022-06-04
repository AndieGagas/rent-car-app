import React, { useState } from "react";
import { Button, FormGroup, FormLabel, OutlinedInput } from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Form(){
    const navigate  = useNavigate()

    const [ input, setInput ]   = useState({name: '',price: '',category: ''})
    const [ image,setImage ]    = useState(null)
    
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const handleAddNewCar = async (e) => {
        e.preventDefault()
        let inputForm    = new FormData();
        inputForm.append('name', input.name);
        inputForm.append('price', input.price);
        inputForm.append('category', input.category);
        inputForm.append('image', image);

        try {
            await axios ({
                method      : "post",
                url         : "https://rent-car-appx.herokuapp.com/admin/car",
                data        : inputForm,
                headers     : {
                    "accept"        : "*/*",
                    "Content-Type"  : "multipart/form-data"
                }
            })
        } catch (error) {
            throw new Error(error)
        } finally{
            navigate('/admin/listCar')
        }
    }

    return(
        <form autoComplete="off" method="POST" onSubmit={handleAddNewCar} className="bg-white w-max p-4 space-y-4">
            <FormGroup row>
                <FormLabel className="my-auto w-36" required>Nama</FormLabel>
                <OutlinedInput
                    required
                    name        ="name"
                    onChange    ={handleChange}
                    placeholder ="Placeholder"
                    color       ="info"
                    className   ="w-96"/>
            </FormGroup>
            <FormGroup row>
                <FormLabel className="my-auto w-36" required>Harga</FormLabel>
                <OutlinedInput
                    required
                    name        ="price"
                    onChange    ={handleChange}
                    placeholder ="Placeholder"
                    color       ="info"
                    className   ="w-96"/>
            </FormGroup>
            <FormGroup row>
                <FormLabel className="my-auto w-36" required>Category</FormLabel>
                <OutlinedInput
                    required
                    name        ="category"
                    onChange    ={handleChange}
                    placeholder ="Placeholder"
                    color       ="info"
                    className   ="w-96"/>
            </FormGroup>
            <FormGroup row>
                <FormLabel className="my-auto w-36" required>Foto</FormLabel>
                <label htmlFor="upload-file">
                    <input type='file' id="upload-file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="hidden"/>
                    <OutlinedInput
                        required
                        inputComponent  ='span'
                        className       ="w-96"
                        endAdornment    ={<FileUploadOutlinedIcon/>}/>  
                </label>
            </FormGroup>
            <div className="flex justify-end gap-4">
                <Button variant="outlined" color="info">Cancel</Button>
                <Button type="submit" variant="contained" color="info">Save</Button>
            </div>
        </form>
    )
}
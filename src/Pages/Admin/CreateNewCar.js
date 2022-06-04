import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
import Header from "../../Component/Admin/Header";
import SideBar from "../../Component/Admin/SideBar";
import FormAddNewCar from "../../Component/Admin/Create-Form";
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';

export default function CreateNewCar(){
    return(
        <section className="bg-[#E5E5E5] h-screen">
            <Header/>
            <SideBar/>
            <div className="ml-72 mt-18 p-6 space-y-6">
                <Breadcrumbs separator={<NavigateNextSharpIcon/>}>
                    <Link 
                        underline   ="hover" 
                        color       ='black' 
                        variant     ="subtitle2"
                        className   ="font-bold">Cars
                    </Link>
                    <Link 
                        underline   ="hover" 
                        color       ='black' 
                        variant     ="subtitle2"
                        href        ='/admin/listCar'
                        className   ="font-bold">List Car
                    </Link>
                    <Link 
                        underline   ="none"  
                        color       ='black' 
                        variant     ="subtitle2">Add New Car
                    </Link>
                </Breadcrumbs>
                <h2>Add New Car</h2>
                <FormAddNewCar/>
            </div>
        </section>
    )
}
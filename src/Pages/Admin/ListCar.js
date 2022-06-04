import { Breadcrumbs, Link, Button } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../Component/Admin/Header";
import SideBar from "../../Component/Admin/SideBar";
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import { useDispatch, useSelector } from "react-redux";
import { getListCar } from "../../Store/listCarSlice";
import SkeletonCar from "../../Component/User/SkeletonCar";
import CarCard from "../../Component/Admin/List-CarCard";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function ListCar(){

    const dispatch = useDispatch()
    const { listCar, loading }    = useSelector((state) => state.listCar )

    useEffect(() => {
        dispatch(getListCar())
    }, [dispatch])

    return(
        <section className="bg-[#E5E5E5]">
            <Header/>
            <SideBar/>
            <div className="ml-72 mt-18 p-6 space-y-6">
                <Breadcrumbs separator={<NavigateNextSharpIcon/>}>
                    <Link 
                        underline   ="hover" 
                        key         ={1} 
                        color       ='black' 
                        variant     ="subtitle2"
                        href        ='/admin/listCar'
                        className   ="font-bold">Cars
                    </Link>
                    <Link 
                        underline   ="none" 
                        key         ={2} 
                        color       ='black' 
                        variant     ="subtitle2">List Car</Link>
                </Breadcrumbs>
                <div className="flex justify-between">
                    <h2 className="mb-0">List Car</h2>
                    <Button variant="contained" href="/admin/addNewCar" color="info" startIcon={<AddOutlinedIcon/>}>Add New Car</Button>
                </div>
                <div className="space-x-4">
                    <Button variant="contained" color='info'>All</Button>
                    <Button variant="outlined" color='info'>Small</Button>
                    <Button variant="outlined" color='info'>Medium</Button>
                    <Button variant="outlined" color='info'>Large</Button>
                </div>

                <section className="grid grid-cols-3 gap-6">
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
            </div>
        </section>
    )
}
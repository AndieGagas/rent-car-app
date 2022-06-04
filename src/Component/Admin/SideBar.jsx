import React, { useState } from "react";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LogoSideBar from '../../Asset/logo_sidebar.svg'
import LogoMenu from '../../Asset/logo_menu.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

function SideBar(){

    const [selected, setSelected] = useState(1)
    const [menu, setMenu]         = useState('Cars')

    const handleClickItem = (index, menu) => {
        setSelected(index)
        setMenu(menu)
    }

    return(
        <aside className="w-72 grid grid-cols-4 fixed top-0 z-20">
            <div className="bg-darkblue-400 h-screen">
                <div className="p-5">
                    <img src={LogoSideBar} alt="" className="m-auto"/>
                </div>
                <List component="nav">
                    <NavLink to="/admin/dashboard" >
                        <ListItem disablePadding>
                            <ListItemButton 
                                selected ={selected === 0}
                                onClick={() => handleClickItem(0, 'Dashboard')}
                                disableGutters  
                                className="flex-col">
                                    <ListItemIcon><HomeOutlinedIcon className="m-auto text-white" fontSize="large"/></ListItemIcon>
                                    <ListItemText primary='Dashboard'/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/listCar">
                        <ListItem disablePadding>
                            <ListItemButton 
                                selected = {selected === 1}
                                onClick={() => handleClickItem(1, 'Cars')}
                                disableGutters  
                                className="flex-col">
                                    <ListItemIcon><LocalShippingOutlinedIcon className="m-auto text-white" fontSize="large"/></ListItemIcon>
                                    <ListItemText primary='Cars'/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                </List>
            </div>

            <div className="h-screen col-span-3 bg-white">
                <img src={LogoMenu} alt="" className="py-5 px-6" />
                <h4 className="my-9 mx-6 uppercase text-netral-300">{menu}</h4>
                <h4 className="py-3 px-6 bg-darkblue-100">{menu}</h4>
            </div>

            <div className="absolute p-5 -right-[75px]">
                <MenuIcon fontSize="large"/>
            </div>
        </aside>
    )
}

export default SideBar
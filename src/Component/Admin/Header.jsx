import { Avatar, Button, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

function Header(){
    return(
        <div className="fixed top-0 z-10 flex justify-end w-full bg-white py-4 px-6">
            <FormControl className="grid grid-cols-7 w-64">
                <OutlinedInput
                    color           ="info"
                    size            ="small"
                    placeholder     ="Search"
                    className       ="col-span-5"
                    startAdornment  ={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                />
                <Button variant="outlined" color="info" className="col-span-2">Search</Button>
            </FormControl>
            <div className="ml-6 flex space-x-3">
                <Avatar>AG</Avatar>
                <p className="my-auto">Andie Gagas</p>
                <KeyboardArrowDownSharpIcon className="my-auto" fontSize="large"/>
            </div>
        </div>
    )
}

export default Header
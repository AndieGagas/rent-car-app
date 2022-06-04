// -------------------- Library React & Router --------------------
import React from 'react';
import {useLocation} from "react-router-dom"

// -------------------- Library Date Picker & Material UI --------------------
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Card, Button, FormControl, FormLabel, Select, MenuItem, TextField, InputAdornment, OutlinedInput } from '@mui/material';

// -------------------- Material UI Icons --------------------
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FormSelect(){
    
    const { state } = useLocation();
    const [driverOption, setDriver] = React.useState('')
    const [date, setDate]           = React.useState(null);
    const [pickTime, setTime]       = React.useState('')
    const timeList  = ['08.00', '09.00', '10.00', '11.00', '12.00']

    // ---------- Conditional Button Form ----------
    function buttonSubmit(){
        let currentPath = window.location.pathname
        switch(currentPath){
            case '/user/landing':
                return(<Button variant="contained" href='/user/listCar' color='success' className=' ml-4 self-end'>Cari Mobil</Button>)           
            case '/user/listCar':
                return(<Button variant="outlined" color='info' className='ml-4 self-end'>Edit</Button>)         
            default:
                return null
        }
    }

    function handleChangeOptionDriver(event){
        setDriver(event.target.value)
    }
    function handleChangeDatePick(newDate){
        setDate(newDate)
    }
    function handleChangePickTime(event){
        setTime(event.target.value)
    }
    
    return(
    <Card className='p-6 w-max m-auto'>
        <form action="" className='flex'>
            <section className='grid grid-cols-4 gap-4'>

            {/* ------------------------- Driver Option Selection Form ------------------------- */}
            <FormControl fullWidth>
                <FormLabel color='success' className='mb-2'>Tipe Driver</FormLabel>
                <Select
                    displayEmpty
                    disabled     ={state}
                    color        ='success'
                    value        ={driverOption}
                    IconComponent={ExpandMoreIcon}
                    onChange     ={handleChangeOptionDriver}>
                        <MenuItem disabled value="">Pilih Tipe Driver</MenuItem>
                        <MenuItem value={'Dengan Sopir'}>Dengan Sopir</MenuItem>
                        <MenuItem value={'Tanpa Sopir'}>Tanpa Sopir (Lepas Kunci)</MenuItem>
                </Select>
            </FormControl>

            {/* ------------------------- Date Selection Form ------------------------- */}
            <FormControl fullWidth>
                <FormLabel className='mb-2'>Tanggal</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value       ={date}
                        disabled    ={state}
                        onChange    ={handleChangeDatePick}
                        renderInput ={(params) => <TextField color='success' {...params} />}
                    />
                </LocalizationProvider>
            </FormControl>

            {/* ------------------------- Pick Up Time Form ------------------------- */}
            <FormControl fullWidth>
                <FormLabel color='success' className='mb-2'>Waktu Jemput/Ambil</FormLabel>
                <Select
                    displayEmpty
                    disabled     ={state}
                    color        ='success'
                    IconComponent={AccessTimeIcon}
                    value        ={pickTime}
                    onChange     ={handleChangePickTime}>
                        <MenuItem disabled value="">Pilih Waktu</MenuItem>
                        {timeList.map((time) => { return(
                            <MenuItem key={time} value={time}>
                                {time}
                            </MenuItem>
                            )}
                        )}
                </Select>
            </FormControl>

            {/* ------------------------- Total Passenger Form ------------------------- */}
            <FormControl fullWidth>
                <FormLabel color='success' className='mb-2'>Jumlah Penumpang (optional)</FormLabel>
                <OutlinedInput
                    disabled        ={state}
                    color           ='success' 
                    placeholder     ='Jumlah Penumpang'
                    endAdornment    ={<InputAdornment position="end"><PeopleOutlinedIcon/></InputAdornment>}/>
            </FormControl>
            </section>

            {/* ------------------------- Function Button Submit ------------------------- */}
            {buttonSubmit()}
        </form>
    </Card>
    )
}

export default FormSelect
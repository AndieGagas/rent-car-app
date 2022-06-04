import React, { Fragment } from "react";
import Navbar from '../../Component/User/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Stepper, Step, StepLabel, IconButton, Card, CardContent, Button } from '@mui/material';
import Success from '../../Asset/success.svg'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Footer from "../../Component/User/Footer";

export default function InvoicePage(){

    const steps = ['Pilih Metode', 'Bayar', 'Tiket']

    return(
        <Fragment>
            <Navbar/>
            <div className="px-52 pb-4 pt-11 flex justify-between bg-darkblue-50">
                <div className="flex">
                    <IconButton href="/user/listCar"><ArrowBackIcon/></IconButton>
                    <div className="ml-4">
                        <h4>Tiket</h4>
                        <p className="m-0">Order ID: xxxxxxxx</p>
                    </div>
                </div>
                <Box className="w-72">
                    <Stepper activeStep={3}>
                        {steps.map((label) => (
                        <Step color="info" key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>

            <div className="pt-10 pb-40">
                <div className="m-auto w-max space-y-4">
                    <img src={Success} alt="" className="m-auto" />
                    <h4 className="text-center">Pembayaran Berhasil!</h4>
                    <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                <Card className="mt-10 m-auto max-w-xl">
                    <CardContent className="p-6">
                        <div className="flex justify-between">
                            <div>
                                <h4>Invoice</h4>
                                <p>*no invoice</p>
                            </div>
                            <Button variant="outlined" color="info" startIcon={<FileDownloadOutlinedIcon/>} className="normal-case font-bold justify-self-end h-max">Unduh</Button>
                        </div>
            
                    </CardContent>
                </Card>
            </div>
            <Footer/>
        </Fragment>
    )
}
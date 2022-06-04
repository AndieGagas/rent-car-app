import React, {useState} from "react";
import { Alert, Snackbar } from "@mui/material";

export default function Toast(){

    const [snackbar, setSnackbar] = useState(false)
    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return
        }
        setSnackbar(false)
    }

    return(
        <Snackbar
            open            ={snackbar}
            autoHideDuration={6000}
            onClose         ={handleClose}
            className       ='w-screen'
            anchorOrigin    ={{vertical:'top',horizontal:'center'}}
            >
                <Alert variant="filled" icon={false} className="w-1/3 mt-18 bg-black">Data Berhasil Dihapus</Alert>
        </Snackbar>
    )
}
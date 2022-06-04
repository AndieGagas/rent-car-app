import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiMenuItem: { styleOverrides: { root: { 
            padding     :'0.75rem',
            "&:focus"   : {
                backgroundColor: 'limegreen',
                color : 'white'
                    },
            
            "&:focus:hover": {
                backgroundColor: 'limegreen',
                    },
            }, }, },
        MuiListItemText: { styleOverrides: { primary: {
            color       :'white',
            fontSize    :'14px',
            fontWeight  :'bold'
        }, }, },
        MuiListItemButton: { styleOverrides: { root: {
            "&.Mui-selected" : {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
        }, }, },
        MuiOutlinedInput: { styleOverrides: { 
            root:{
                height      : '2.5rem'
            },
            input:{
                padding     : '8px'
            }, }, },
        MuiButton: { styleOverrides: { root:{
            fontWeight  : 'bold',
            textTransform: 'none'
        }}}
    },

    palette: {
        success: {
            main: '#5CB85F',
            contrastText: '#FFFFFF'
        },
        info: {
            main: '#0D28A6',
            contrastText: '#FFFFFF'
        }
    }
})

export default theme
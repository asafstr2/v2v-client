import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette:{
        primary:{
            main:'#005879',
            
        },
        secondary:{
            main:'#0088CC'
        }
    },
    typography: {
        fontFamily: [
            'Inter',
        ].join(','),
    }
})


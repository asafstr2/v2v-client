import { makeStyles } from '@material-ui/styles'
import React from 'react'
const useStyles = makeStyles(theme=>({
    holder:{
        marginTop:80
    }
}))

export default function Navbar({hidden}) {
    const classes = useStyles()
    const header =      
  <header>
    <img height="100%" src={"logo.svg"} alt={"logo"} />
  </header>
    return !hidden ? header : null
}
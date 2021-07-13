import { makeStyles, Button, Container} from '@material-ui/core'
import { React } from 'react'
import { ReactComponent as VimeoAcademyLogo } from '../assets/VimeoAcademy.svg'
import { ReactComponent as ButtonArrow } from '../assets/ButtonArrow.svg'
import { ReactComponent as Vimeo } from '../assets/Vimeo.svg'
import { ReactComponent as BackgroundIcon } from '../assets/BackgroundIcon.svg'


const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        width:'100%',
        height:'100vh',
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
        boxShadow:'unset',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        paddingBlock:20

    },
    registerContainer:{
        display: 'flex',
        justifyContent: 'flex-end',
        '& button':{
            color:'white',
            marginRight:'16px'
        }
    },
    left_section:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        flex:.65,
        textAlign:'left',
        paddingLeft:'5rem',
        position:'relative'
    },
    right_section:{
        background:'#005879',
        flex:.35,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > div':{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 700,
            marginLeft: -36,
            '& > svg':{
                transform:'scale(.9)'
            }
        }
    },
    btn:{
        color:'#005879',
        width:'30%',
        padding:10,
        borderRadius:8

    },
    btnText:{
        textAlign:'left',

    }
}))
const Onboarding = () => {
    const classes = useStyles()
    return <div className={classes.root}>

        <div className={classes.left_section}>
        <Container className={classes.header}>
            <Vimeo/>
            <Container className={classes.registerContainer}>
                <Button href="?signin=true" color="primary" variant="contained">Log in</Button>
                <Button href="?signin=true" color="secondary"  variant="contained">Sign up</Button>
            </Container>
        </Container>
        <VimeoAcademyLogo/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <Button href="/" classes={{text:classes.btnText, root:classes.btn}} style={{textAlign:'left'}} color="primary" variant="outlined"  endIcon={<ButtonArrow/>}>Get Started </Button>
        </div>
        <div className={classes.right_section}>
            <div>
                <BackgroundIcon/>
            </div>
        </div>
    </div>
}


export default Onboarding
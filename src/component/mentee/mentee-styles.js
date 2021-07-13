const {makeStyles} = require("@material-ui/core/styles");

const menteeStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    root:{
        background:'white',
        height:'500px',
        width:'500px',
        display:'flex',
        flexDirection:'column',
        padding:20,
        borderRadius:10,
        justifyContent:'space-around'
    },
    title:{
        fontSize:32,
        fontWeight:700,
        color:theme.palette.primary.main
    },
    select:{
        border:'1px solid',
        borderRadius:10
    }

}))

export default menteeStyles;
const {makeStyles} = require("@material-ui/core/styles");

const bubbleModalStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    modalContent:{
        background:'white',
        height:'500px',
        width:'500px',
        display:'flex',
        flexDirection:'column',
        padding:20,
        borderRadius:10,
        justifyContent:'space-around'
    },
}))

export default bubbleModalStyles;
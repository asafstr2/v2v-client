const {makeStyles} = require("@material-ui/core/styles");

const navMenuStyles = makeStyles(() => ({
    menu: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '88px',
        // height: '154px',
        position: 'absolute',
        right: 0,
        bottom: 0,
        background: 'white',
        border: '1px solid #EDF1F2',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
        borderRadius: '10px',
    },
    menuItem: {
        // border: '1px solid red',
        paddingTop: '20px',
        cursor: 'pointer',
    },
}))

export default navMenuStyles;
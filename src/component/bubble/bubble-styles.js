const {makeStyles} = require("@material-ui/core/styles");

const bubbleStyles = makeStyles(() => ({
    bubble: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        margin: '60px 0 0',
        // height: '100%',
        boxShadow: '0px 10px 20px rgb(41 41 42 / 7%)',
        borderRadius: '8px',
        width: '255px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '24px',
        color: '#18191F',
        position: 'relative',
        background: 'white',
    },
    title: {
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '32px',
    },
    icon: {
        position: 'absolute',
        bottom: '24px',
        left: '24px',
    },
    button: {
        backgroundColor: 'white',
        // width: '371px',
        // height: '357px',
        // margin: '12px',
        // boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        // borderRadius: '16px',
        // boxShadow: '0px 10px 20px rgb(41 41 42 / 7%)',
        // borderRadius: '8px',
        // width: '255px',
        // height: '200px',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // padding: '24px',
        // color: '#18191F',
    },
    plus:  {
        cursor: 'pointer',
    }
}))

export default bubbleStyles;
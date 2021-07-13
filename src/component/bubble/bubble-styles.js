const {makeStyles} = require("@material-ui/core/styles");

const bubbleStyles = makeStyles(() => ({
    bubble: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px',
        height: '100%',
    },
    button: {
        backgroundColor: '#7FDAFD',
        width: '371px',
        height: '357px',
        margin: '12px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
    },
    plus:  {
        cursor: 'pointer',
    }
}))

export default bubbleStyles;
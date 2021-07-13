const {makeStyles} = require("@material-ui/core/styles");

const contentStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '125px 0 0',
        margin: '0 auto 30px',
    },
    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px',
        flexWrap: 'wrap',
    },
    addBubble:  {
        background: '#2196F3',
        color: 'white',
        width: '126px',
        height: '40px',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
        borderRadius: '100px',
    }
}))

export default contentStyles;
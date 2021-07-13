const {makeStyles} = require("@material-ui/core/styles");

const contentStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '0 auto 30px',
    },
    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px',
        flexWrap: 'wrap',
    },

}))

export default contentStyles;
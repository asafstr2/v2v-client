const {makeStyles} = require("@material-ui/core/styles");

const contentStyles = makeStyles(() => ({
    content: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '0 auto 30px',
    },
    innerWrapper: {
        width: '1110px',
        margin: '35px auto 0',
    },
    buttonsWrapper: {
        // display: 'flex',
        // justifyContent: 'center',
        marginBottom: '50px',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
        minHeight: '580px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

}))

export default contentStyles;
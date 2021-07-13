const {makeStyles} = require("@material-ui/core/styles");

const menteeStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    input: {
        width: '823px',
        height: '223px',
        background: 'white',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        "& input": {
            border: '2px solid #00ADEF',
            borderRadius: '6px',
            paddingLeft: '1%',
            width: '716px',

        }
    },
}))

export default menteeStyles;
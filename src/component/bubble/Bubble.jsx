import Button from '@material-ui/core/Button';
import bubbleStyles from "./bubble-styles";

function Bubble({type, id}) {
    const classes = bubbleStyles();
    return (
        <div className={classes.bubble}>
            <Button href={`/${id}`} className={classes.button} variant="contained">
                {type}
            </Button>
        </div>
    )
}

export default Bubble;
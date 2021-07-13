import Button from '@material-ui/core/Button';
import bubbleStyles from "./bubble-styles";

function Bubble({type}) {
    const classes = bubbleStyles();
    return (
        <div className={classes.bubble}>
            <Button className={classes.button} variant="contained">
                {type}
            </Button>
        </div>
    )
}

export default Bubble;
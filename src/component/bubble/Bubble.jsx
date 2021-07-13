import Button from '@material-ui/core/Button';
import bubbleStyles from "./bubble-styles";

function Bubble({type}) {
    const classes = bubbleStyles();
    return (
        <div className={classes.bubble}>
            <Button className={classes.button} variant="contained">
                {type}
            </Button>
            <img className={classes.plus}  src={'Plus.png'} alt={'plus'}></img>
        </div>
    )
}

export default Bubble;
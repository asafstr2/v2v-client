import Button from '@material-ui/core/Button';
import bubbleStyles from "./bubble-styles";
import {ReactComponent as BubbleIcon1} from "../../assets/bubble-icon1.svg";
import React from "react";

function Bubble({title}) {
    const classes = bubbleStyles();
    return (
        <div className={classes.bubble}>
            <p className={classes.title}>{title}</p>
            {/*<Button className={classes.button} variant="contained">*/}
                <BubbleIcon1 className={classes.icon} />
            {/*</Button>*/}
        </div>
    )
}

export default Bubble;
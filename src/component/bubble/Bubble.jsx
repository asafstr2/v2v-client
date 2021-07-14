import Button from '@material-ui/core/Button';
import bubbleStyles from "./bubble-styles";
import {ReactComponent as BubbleIcon1} from "../../assets/bubble-icon1.svg";
import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function Bubble({title, id}) {
    const classes = bubbleStyles();
    // const dispatch = useDispatch();
    // const deleteBubble = () => {
    // //    TODO - delete bubble per id
    // }
    return (
        <Link to={`/${id}`}>
        <div className={classes.bubble}>
            {/*<svg onClick={deleteBubble} className={classes.close} focusable="false" viewBox="0 0 24 24"*/}
            {/*     aria-hidden="true">*/}
            {/*    <path*/}
            {/*        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>*/}
            {/*</svg>*/}
            <p className={classes.title}>{title}</p>
            {/*<Button className={classes.button} variant="contained">*/}
                <BubbleIcon1 className={classes.icon} />
            {/*</Button>*/}
        </div>
        </Link>
    )
}

export default Bubble;
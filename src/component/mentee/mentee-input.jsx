import menteeStyles from "./mentee-styles";
import {TextField} from "@material-ui/core";

function MenteeInput() {
    const classes = menteeStyles();
    return (
        <div className={classes.wrapper}>
            {/*<form className={classes.root} noValidate autoComplete="off">*/}
                <TextField className={classes.input} placeholder="Type your question" />
            {/*</form>*/}
        </div>
    )
}

export default MenteeInput;
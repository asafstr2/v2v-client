import menteeStyles from "./mentee-styles";
import {TextField} from "@material-ui/core";

function MenteeInput() {
    const classes = menteeStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Ask away" />
            </form>
        </div>
    )
}

export default MenteeInput;
import menteeStyles from "./mentee-styles";
import {Button, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {postNewbubbeles} from "../../redux/actions/bubbeles";

function MenteeInput({setIsOpen}) {
    const classes = menteeStyles();
    const dispatch = useDispatch();
    const [question, setQuestion] = useState(null);
    const handleOnChange = (e) => {
        setQuestion({title: e.target.value, desc: "descTest", category: 'tech', tags: 'tech,react'})
    }
    const onSubmit = () => {
        dispatch(postNewbubbeles(question));
        setIsOpen(false);
    }
    return (
        <div className={classes.wrapper}>
            {/*<form className={classes.root} noValidate autoComplete="off">*/}
                <TextField className={classes.input} placeholder="Type your question" onChange={handleOnChange}/>
            {/*</form>*/}
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    )
}

export default MenteeInput;
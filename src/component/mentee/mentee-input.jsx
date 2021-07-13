import menteeStyles from "./mentee-styles";
import {Button, OutlinedInput, TextField, Typography,Select  } from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {postNewbubbeles} from "../../redux/actions/bubbeles";

function MenteeInput({setOpen}) {
    const classes = menteeStyles();
    const dispatch = useDispatch();
    const [question, setQuestion] = useState(null);
    const handleOnChange = (e) => {
        setQuestion({...question, [e.target.name]: e.target.value})
        setQuestion({title: e.target.value, desc: "descTest", category: 'tech', tags: 'tech,react'})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewbubbeles(question));
        setOpen(false);
    }
    return (
        <div className={classes.wrapper}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <Typography className={classes.title}>What would you like to know?</Typography>
                <OutlinedInput placeholder="Title" name="title" onChange={handleOnChange}/>
                <OutlinedInput placeholder={"Description"} name="desc" onChange={handleOnChange} multiline rows={4}/>
                <Select placeholder="Tags" name="tags" onChange={handleOnChange} variant="outlined" className={classes.select}/>
                <Button style={{alignSelf:'flex-end'}} color="secondary" variant="contained" type={'submit'}>Submit</Button>
            </form>
        </div>
    )
}

export default MenteeInput;
import Bubble from "../bubble/Bubble";
import React, {useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actions";
import contentStyles from "./content-styles";
import SimpleModal from "../modal/simple-modal";
import MenteeInput from "../mentee/mentee-input";
import { Typography ,makeStyles} from "@material-ui/core";
import { ReactComponent as ButtonArrow } from "../../assets/ButtonArrow.svg";
import { ReactComponent as CircleBg } from '../../assets/Circle.svg'
import {fetchbubbeles, postNewbubbeles} from "../../redux/actions/bubbeles";

const useStyles = makeStyles(theme=>({
    title:{
        color:theme.palette.secondary.main,
        fontSize:48,
        fontWeight:800,
        textAlign:'left'
    },
    addButton:{
        color:theme.palette.secondary.main,
        float: 'right',

    },
    circleBg: {
        position: 'absolute',
        right: '85.5px',
        top: '184px',
        zIndex: '-1',
    }
}))
function Content() {
    const classes = contentStyles();
    const dispatch = useDispatch();
    const [isMenteeModalOpen, setIsMenteeModalOpen] = useState(false);
    const bubbleList = useSelector((state) => {
        return state.bubbles.all;
    })

    useEffect(() => {
        dispatch(fetchbubbeles());
    }, [])

    const openMenteeModal = () => {
        setIsMenteeModalOpen(!isMenteeModalOpen);
    }

    const addBubble = (text) => {
        dispatch(addTodo('text12312131'));
    }
    const MUIclasses = useStyles()

    return <div className={classes.content}>
            <div className={classes.innerWrapper}>
                <Typography className={MUIclasses.title}>What would you like to learn today?</Typography>
                <div className={classes.buttonsWrapper}>
                    {bubbleList.map((bubble) => {
                        return <Bubble key={bubble.id || bubble._id} title={bubble.title}>{bubble.title}</Bubble>
                    })}
                </div>
                <Button className={MUIclasses.addButton} variant="outlined" color="primary" onClick={openMenteeModal} endIcon={<ButtonArrow/>}>
                    Add Request
                </Button>
                {isMenteeModalOpen && <SimpleModal body={<MenteeInput setOpen={setIsMenteeModalOpen}></MenteeInput>} open={isMenteeModalOpen}></SimpleModal>}
            </div>
        <CircleBg className={MUIclasses.circleBg} />
    </div>
}

export default Content;
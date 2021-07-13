import Bubble from "../bubble/Bubble";
import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actions";
import contentStyles from "./content-styles";
import SimpleModal from "../modal/simple-modal";
import MenteeInput from "../mentee/mentee-input";
import { Typography ,makeStyles} from "@material-ui/core";
import { ReactComponent as ButtonArrow } from "../../assets/ButtonArrow.svg";
const useStyles = makeStyles(theme=>({
    title:{
        color:theme.palette.secondary.main,
        fontSize:48,
        fontWeight:800,
        textAlign:'left'
    },
    addButton:{
        padding:12,
        color:theme.palette.secondary.main,
        alignSelf:'flex-end'

    }
}))
function Content() {
    const classes = contentStyles();
    const dispatch = useDispatch();
    const [isMenteeModalOpen, setIsMenteeModalOpen] = useState(false);
    const bubbleList = useSelector((state) => {
        return state.bubbles.all;
    })

    const openMenteeModal = () => {
        setIsMenteeModalOpen(!isMenteeModalOpen);
    }

    const addBubble = (text) => {
        dispatch(addTodo('text12312131'));
    }
    const MUIclasses = useStyles()

    return <div className={classes.content}>
        <Typography className={MUIclasses.title}>What would you like to learn today?</Typography>
        <div className={classes.buttonsWrapper}>
            {bubbleList.map((bubble) => {
                return <Bubble key={bubble.id} type={bubble.content}>{bubble.content}</Bubble>
            })}
        </div>
        <Button className={MUIclasses.addButton} variant="outlined" color="primary" onClick={openMenteeModal} endIcon={<ButtonArrow/>}>
            <svg className="MuiSvgIcon-root jss82 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{'width': '18px','fill': 'white'}}>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
            Add Request
        </Button>
        {isMenteeModalOpen && <SimpleModal body={<MenteeInput></MenteeInput>} isOpen={true}></SimpleModal>}
    </div>
}

export default Content;
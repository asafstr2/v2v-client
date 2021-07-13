import Bubble from "../bubble/Bubble";
import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/actions";
import contentStyles from "./content-styles";
import SimpleModal from "../modal/simple-modal";
import MenteeInput from "../mentee/mentee-input";

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

    return <div className={classes.content}>
        <div className={classes.buttonsWrapper}>
            {bubbleList.map((bubble) => {
                return <Bubble key={bubble.id} type={bubble.title}>{bubble.desc}</Bubble>
            })}
        </div>
        <Button className={classes.addBubble} variant="contained" color="primary" onClick={openMenteeModal}>
            <svg className="MuiSvgIcon-root jss82 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{'width': '18px','fill': 'white'}}>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
            Action
        </Button>
        {isMenteeModalOpen && <SimpleModal body={<MenteeInput setIsOpen={setIsMenteeModalOpen}></MenteeInput>} isOpen={isMenteeModalOpen}></SimpleModal>}
    </div>
}

export default Content;
import Bubble from "./bubble/Bubble";
import bubblesApi from "../api/bubbles-api";
import React, {useEffect, useState} from 'react';
import './content.css';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../redux/actions";

function Content() {
    const dispatch = useDispatch();
    const bubbleList = useSelector((state) => {
        return state.bubbles.all;
    })

    const addBubble = (text) => {
        dispatch(addTodo('text12312131'));
    }

    return (
        <div className="content-wrapper">
            {/*<Modal*/}
            {/*    aria-labelledby="modal-title"*/}
            {/*    aria-describedby="modal-description"*/}
            {/*>*/}
            {/*    <h2 id="modal-title">*/}
            {/*        My Title*/}
            {/*    </h2>*/}
            {/*    <p id="modal-description">*/}
            {/*        My Description*/}
            {/*    </p>*/}
            {/*</Modal>*/}
            <div className="buttons-wrapper">
                {bubbleList.map((bubble) => {
                    return (
                        <Bubble key={bubble.id} type={bubble.content}>{bubble.content}</Bubble>
                    )
                })}
            </div>
            <Button className="add-bubble" variant="contained" color="primary" onClick={addBubble}>
                <svg className="MuiSvgIcon-root jss82 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{'width': '18px','fill': 'white'}}>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
                Action</Button>
        </div>
    )
};

export default Content;
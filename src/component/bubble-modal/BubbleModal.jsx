import {useParams} from "react-router";
import Bubble from "../bubble/Bubble";
import SimpleModal from "../modal/simple-modal";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchbubbeles} from "../../redux/actions/bubbeles";
import bubbleModalStyles from "./bubble-modal-styles";

function BubbleModal({id}) {
    const classes = bubbleModalStyles();

    const dispatch = useDispatch();
    // const [isMenteeModalOpen, setIsMenteeModalOpen] = useState(false);
    const bubble = useSelector((state) => {
        return state.bubbles.all.filter((item) => {
            return item._id === id;
        });
    })

    useEffect(() => {
        dispatch(fetchbubbeles());
    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={classes.modalContent}>
                <p>{bubble?.title}</p>
                <p>{bubble?.desc}</p>
            </div>
        </div>
    )
}

export default BubbleModal;
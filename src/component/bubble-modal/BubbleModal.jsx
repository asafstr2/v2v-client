import {useParams} from "react-router";
import Bubble from "../bubble/Bubble";
import SimpleModal from "../modal/simple-modal";

function BubbleModal() {
    const { id } = useParams();
    return (
        <div className='bubble-modal-wrapper'>
            <SimpleModal body={<Bubble type={"modalBubble"}></Bubble>} isOpen={true}>
            </SimpleModal>
        </div>
    )
}

export default BubbleModal;
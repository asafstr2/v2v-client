import React from 'react';
import Modal from '@material-ui/core/Modal';
import modalStyles from "./modal-styles";

export default function SimpleModal({body, open, setOpen}) {
    const classes = modalStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
            
        <div >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableEnforceFocus
            >
                {body}
            </Modal>
        </div>
    );
}

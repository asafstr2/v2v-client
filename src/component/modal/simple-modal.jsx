import React from 'react';
import Modal from '@material-ui/core/Modal';
import modalStyles from "./modal-styles";

export default function SimpleModal({body, isOpen}) {
    const classes = modalStyles();
    const [open, setOpen] = React.useState(isOpen || false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.modal}>
            {/*<button type="button" onClick={handleOpen}>*/}
            {/*    Open Modal*/}
            {/*</button>*/}

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

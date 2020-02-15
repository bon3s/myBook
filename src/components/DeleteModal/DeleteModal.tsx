import React, { SyntheticEvent } from 'react';
import DeleteModalStyles from './styles/DeleteModalStyles';
import { Modal, Button } from 'react-bootstrap';

interface Props {
    visible: boolean;
    contactDeleteId: string;
    handleModalClose: () => void;
    handleDeleteContact: (id: string) => void;
}

const DeleteModal = (props: Props) => {
    return (
        <DeleteModalStyles
            show={props.visible}
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this contact?
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={(e: SyntheticEvent) => {
                        e.preventDefault();
                        props.handleModalClose();
                    }}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={(e: SyntheticEvent) => {
                        e.preventDefault();
                        props.handleDeleteContact(props.contactDeleteId);
                    }}>
                    Delete
                </Button>
            </Modal.Footer>
        </DeleteModalStyles>
    );
};

export default DeleteModal;

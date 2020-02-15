import React from 'react';
import DeleteModalStyles from './styles/DeleteModalStyles';
import { Modal } from 'react-bootstrap';
import GenericButton from '../GenericComponents/GenericButton';
import { theme } from '../Theme/theme';

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
                <p>Are you sure you want to delete this contact?</p>
            </Modal.Body>
            <Modal.Footer>
                <GenericButton
                    handleClick={() => {
                        props.handleModalClose();
                    }}
                    backgroundColor={theme.colors.gray3}
                    buttonText={'Cancel'}></GenericButton>
                <GenericButton
                    handleClick={() => {
                        props.handleDeleteContact(props.contactDeleteId);
                    }}
                    backgroundColor={theme.colors.primary}
                    buttonText={'Delete'}></GenericButton>
            </Modal.Footer>
        </DeleteModalStyles>
    );
};

export default DeleteModal;

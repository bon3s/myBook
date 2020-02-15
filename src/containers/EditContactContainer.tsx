import React, { Component } from 'react';
import { RouterProps } from 'react-router';
import { Dispatch } from 'redux';
import { EditContactScreen } from '../screens/EditContactScreen/EditContactScreen';
import AppState from '../redux/AppState';
import { connect } from 'react-redux';
import { ContactType } from '../types/ContactType';
import { removeContact, updateContact } from '../redux/contactsActions';

interface Props extends RouterProps {
    dispatch: Dispatch;
    itemToEdit: ContactType;
}

interface State {
    modalData: {
        visible: boolean;
        id: string;
    };
}

class EditContactContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            modalData: {
                visible: false,
                id: '',
            },
        };
    }

    handleDeleteClick = (item: ContactType) => {
        this.setState({
            modalData: {
                visible: true,
                id: item.id,
            },
        });

        // window.URL.revokeObjectURL(item.image);
        // this.props.dispatch(removeContact(item.id));
    };

    handleDeleteContact = (id: string) => {
        this.props.dispatch(removeContact(id));
        this.setState({
            modalData: {
                visible: false,
                id: '',
            },
        });
        this.props.history.push({
            pathname: '/',
        });
    };

    handleModalClose = () => {
        this.setState({
            modalData: {
                visible: false,
                id: '',
            },
        });
    };

    handleSaveClick = (contactItem: ContactType) => {
        this.props.dispatch(updateContact(contactItem));
        this.props.history.push({
            pathname: '/',
        });
    };

    render() {
        if (this.props.itemToEdit.id !== '') {
            return (
                <EditContactScreen
                    modalVisible={this.state.modalData.visible}
                    contactDeleteId={this.state.modalData.id}
                    handleDeleteContact={this.handleDeleteContact}
                    handleModalClose={this.handleModalClose}
                    itemToEdit={this.props.itemToEdit}
                    history={this.props.history}
                    handleSaveClick={this.handleSaveClick}
                    handleDeleteClick={this.handleDeleteClick}
                />
            );
        } else {
            this.props.history.push({
                pathname: '/',
            });
            return null;
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    contact: state.contacts.contacts,
});

export default connect(mapStateToProps)(EditContactContainer);

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

class EditContactContainer extends Component<Props> {
    handleDeleteClick = (item: ContactType) => {
        window.URL.revokeObjectURL(item.image);
        this.props.dispatch(removeContact(item.id));
        this.props.history.push({
            pathname: '/',
            state: {},
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

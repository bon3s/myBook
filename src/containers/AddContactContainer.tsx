import React, { Component } from 'react';
import { AddContactScreen } from '../screens/AddContactScreen/AddContactScreen';
import { RouterProps } from 'react-router';
import { ContactType } from '../types/ContactType';
import { Dispatch } from 'redux';
import { addContact } from '../redux/contactsActions';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';

interface Props extends RouterProps {
    dispatch: Dispatch;
}

class AddContactContainer extends Component<Props> {
    handleSaveClick = (contactItem: ContactType) => {
        this.props.dispatch(addContact(contactItem));
        this.props.history.push('/');
    };

    render() {
        return (
            <AddContactScreen
                handleSaveClick={this.handleSaveClick}
                history={this.props.history}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    contact: state.contacts.contacts,
});

export default connect(mapStateToProps)(AddContactContainer);

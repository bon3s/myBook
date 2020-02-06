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
    itemToRender: ContactType;
}

class EditContactContainer extends Component<Props> {
    itemToRender = this.props.history.location.state;

    handleDeleteClick = (item: ContactType) => {
        window.URL.revokeObjectURL(item.image);
        this.props.dispatch(removeContact(item.id));
        this.props.history.push('/');
    };

    handleSaveClick = (contactItem: ContactType) => {
        this.props.dispatch(updateContact(contactItem));
        // this.props.history.push({
        //     pathname: '/',
        //     state: {},
        // });
    };

    render() {
        const routeProps: any = this.props.history.location.state || undefined;
        if (
            routeProps.itemToEdit !== undefined &&
            routeProps.itemToEdit !== ''
        ) {
            return (
                <EditContactScreen
                    itemToEdit={JSON.parse(routeProps.itemToEdit)}
                    history={this.props.history}
                    handleSaveClick={this.handleSaveClick}
                    handleDeleteClick={this.handleDeleteClick}
                />
            );
        } else {
            this.props.history.push('/');
            return null;
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    contact: state.contacts.contacts,
});

export default connect(mapStateToProps)(EditContactContainer);

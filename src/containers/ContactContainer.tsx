import React, { Component } from 'react';
import { RouterProps } from 'react-router';
import AppState from '../redux/AppState';
import { ContactType } from '../types/ContactType';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { updateFavorite } from '../redux/contactsActions';
import { ContactScreen } from '../screens/ContactScreen/ContactScreen';

interface Props extends RouterProps {
    contacts: ContactType[];
    dispatch: Dispatch;
    contactToShow: ContactType;
}

class ContactContainer extends Component<Props> {
    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
    };

    handleEditClick = (id: string) => {};

    public render() {
        // if (
        //     this.props.history.location.state.itemToShow !== undefined &&
        //     this.props.history.location.state.itemToShow !== null
        // ) {
        //     this.props.history.push('/');
        //     return null;
        // } else {
        return (
            <ContactScreen
                contact={this.props.contactToShow}
                history={this.props.history}
                handleEditClick={this.handleEditClick}
                handleFavoriteClick={this.handleFavoriteClick}
            />
        );
        // }
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.contacts.contacts,
    };
};
export default connect(mapStateToProps)(ContactContainer);

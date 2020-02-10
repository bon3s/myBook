import React, { Component } from 'react';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import { RouterProps } from 'react-router';
import { ContactType } from '../types/ContactType';
import { removeContact, updateFavorite } from '../redux/contactsActions';
import AppState from '../redux/AppState';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface Props extends RouterProps {
    dispatch: Dispatch;
    contacts: ContactType[];
    handleEditClick: (item: ContactType) => void;
    handleContactClick: (item: ContactType) => void;
}

class FavoritesContainer extends Component<Props> {
    handleDeleteClick = (item: ContactType) => {
        window.URL.revokeObjectURL(item.image);
        this.props.dispatch(removeContact(item.id));
    };

    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
    };

    render() {
        return (
            <FavoritesScreen
                contacts={this.props.contacts}
                handleDeleteClick={this.handleDeleteClick}
                handleEditClick={this.props.handleEditClick}
                handleFavoriteClick={this.handleFavoriteClick}
                handleContactClick={this.props.handleContactClick}
                history={this.props.history}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.contacts.contacts,
    };
};
export default connect(mapStateToProps)(FavoritesContainer);

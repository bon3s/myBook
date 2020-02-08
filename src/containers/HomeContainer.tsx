import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { RouterProps } from 'react-router';
import AppState from '../redux/AppState';
import { ContactType } from '../types/ContactType';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { removeContact, updateFavorite } from '../redux/contactsActions';

interface Props extends RouterProps {
    contacts: ContactType[];
    dispatch: Dispatch;
}

class HomeContainer extends Component<Props> {
    // constructor(props: Props) {
    //     super(props);
    // }

    handleDeleteClick = (item: ContactType) => {
        window.URL.revokeObjectURL(item.image);
        this.props.dispatch(removeContact(item.id));
    };

    handleEditClick = (item: ContactType) => {
        this.props.history.push({
            pathname: '/editContact',
            state: {
                itemToEdit: JSON.stringify(item),
            },
        });
    };

    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
    };

    public render() {
        return (
            <HomeScreen
                handleFavoriteClick={this.handleFavoriteClick}
                handleEditClick={this.handleEditClick}
                handleDeleteClick={this.handleDeleteClick}
                contacts={this.props.contacts}
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
export default connect(mapStateToProps)(HomeContainer);

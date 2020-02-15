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
    handleEditClick: (id: string) => void;
    handleContactClick: (id: string) => void;
}

interface State {
    filteredList: ContactType[];
    query: string;
    modalData: {
        visible: boolean;
        id: string;
    };
}

class FavoritesContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            filteredList: [],
            query: '',
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
    };

    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
    };

    handleSearchInput = (query: string) => {
        const adaptedQuery = query.toLowerCase();

        const filteredList = this.props.contacts.filter(item => {
            const lc = item.name.toLowerCase();
            return lc.includes(adaptedQuery);
        });

        this.setState({ filteredList: filteredList, query: query });
    };

    handleModalClose = () => {
        this.setState({
            modalData: {
                visible: false,
                id: '',
            },
        });
    };

    manageContacts = () => {
        if (this.state.filteredList.length === 0 && this.state.query === '') {
            return this.props.contacts;
        } else if (
            this.state.filteredList.length === 0 &&
            this.state.query !== ''
        ) {
            return this.state.filteredList;
        } else {
            return this.state.filteredList;
        }
    };

    render() {
        return (
            <FavoritesScreen
                history={this.props.history}
                modalVisible={this.state.modalData.visible}
                contactDeleteId={this.state.modalData.id}
                handleDeleteContact={this.handleDeleteContact}
                handleModalClose={this.handleModalClose}
                handleDeleteClick={this.handleDeleteClick}
                handleEditClick={this.props.handleEditClick}
                handleFavoriteClick={this.handleFavoriteClick}
                handleContactClick={this.props.handleContactClick}
                handleSearchInput={this.handleSearchInput}
                contacts={this.manageContacts()}
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

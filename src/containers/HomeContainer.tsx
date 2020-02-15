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
    handleContactClick: (id: string) => void;
    handleEditClick: (id: string) => void;
}
interface State {
    filteredList: ContactType[];
    query: string;
    modalData: {
        visible: boolean;
        id: string;
    };
}

class HomeContainer extends Component<Props, State> {
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
        this.props.history.push({
            pathname: '/',
        });
    };

    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
    };

    handleModalClose = () => {
        this.setState({
            modalData: {
                visible: false,
                id: '',
            },
        });
    };

    handleSearchInput = (query: string) => {
        const adaptedQuery = query.toLowerCase();

        const filteredList = this.props.contacts.filter(item => {
            const lc = item.name.toLowerCase();
            return lc.includes(adaptedQuery);
        });

        this.setState({ filteredList: filteredList, query: query });
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

    public render() {
        return (
            <HomeScreen
                history={this.props.history}
                modalVisible={this.state.modalData.visible}
                contactDeleteId={this.state.modalData.id}
                handleDeleteContact={this.handleDeleteContact}
                handleModalClose={this.handleModalClose}
                handleSearchInput={this.handleSearchInput}
                handleFavoriteClick={this.handleFavoriteClick}
                handleEditClick={this.props.handleEditClick}
                handleDeleteClick={this.handleDeleteClick}
                handleContactClick={this.props.handleContactClick}
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
export default connect(mapStateToProps)(HomeContainer);

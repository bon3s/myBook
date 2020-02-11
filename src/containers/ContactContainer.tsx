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
    handleEditClick: (id: string) => void;
}

interface State {
    contactToShow: ContactType;
}

class ContactContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            contactToShow: {
                id: this.props.contactToShow.id,
                image: this.props.contactToShow.image,
                name: this.props.contactToShow.name,
                email: this.props.contactToShow.email,
                favorite: this.props.contactToShow.favorite,
                numbers: this.props.contactToShow.numbers,
            },
        };
    }

    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
        this.props.handleEditClick(id);
    };

    componentDidUpdate(prevState: Props, nextState: Props) {
        if (prevState !== nextState) {
            this.props.contacts.forEach(item => {
                if (item.id === prevState.contactToShow.id) {
                    this.setState({
                        contactToShow: item,
                    });
                }
            });
        }
    }

    public render() {
        if (
            this.props.contactToShow !== undefined &&
            this.props.contactToShow.id !== ''
        ) {
            return (
                <ContactScreen
                    contact={this.props.contactToShow}
                    history={this.props.history}
                    handleEditClick={this.props.handleEditClick}
                    handleFavoriteClick={this.handleFavoriteClick}
                />
            );
        } else {
            if (this.state.contactToShow.id !== '') {
                return (
                    <ContactScreen
                        contact={this.state.contactToShow}
                        history={this.props.history}
                        handleEditClick={this.props.handleEditClick}
                        handleFavoriteClick={this.handleFavoriteClick}
                    />
                );
            } else {
                this.props.history.push('/');
                return null;
            }
        }
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.contacts.contacts,
    };
};
export default connect(mapStateToProps)(ContactContainer);

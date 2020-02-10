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
    handleEditClick: (item: ContactType) => void;
}
interface State {
    item: ContactType;
}
class ContactContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            item: {
                id: '',
                name: '',
                email: '',
                image: '',
                favorite: false,
                numbers: [],
            },
        };
    }

    handleFavoriteClick = (id: string) => {
        this.props.dispatch(updateFavorite(id));
    };

    componentWillReceiveProps() {
        if (this.props.contactToShow) {
            this.setState({ item: this.props.contactToShow });
        }
    }

    public render() {
        console.log(this.state.item, this.props.contactToShow);
        // if (this.state.item.id) {
        //     this.props.history.push('/');
        //     return null;
        // } else {
        return (
            <ContactScreen
                contact={this.state.item}
                history={this.props.history}
                handleEditClick={this.props.handleEditClick}
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

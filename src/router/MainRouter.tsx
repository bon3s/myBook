import React from 'react';
import { Switch, Route, RouterProps } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import AddContactContainer from '../containers/AddContactContainer';
import Error404Container from '../containers/ErrorContainer';
import EditContactContainer from '../containers/EditContactContainer';
import ContactContainer from '../containers/ContactContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';
import { ContactType } from '../types/ContactType';

interface Props extends RouterProps {
    contacts: ContactType[];
}

const Router = (props: Props) => {
    let contactToShow: ContactType = {
        id: '',
        name: '',
        email: '',
        image: '',
        favorite: false,
        numbers: [],
    };

    const handleContactClick = (id: string) => {
        props.contacts.forEach((item: ContactType) => {
            if (item.id === id) {
                contactToShow = item;
            }
        });
    };

    const handleEditClick = (id: string) => {
        props.contacts.forEach((item: ContactType) => {
            if (item.id === id) {
                contactToShow = item;
            }
        });
    };

    return (
        <Switch>
            <Route
                path="/"
                render={props => (
                    <HomeContainer
                        history={props.history}
                        handleContactClick={handleContactClick}
                        handleEditClick={handleEditClick}
                    />
                )}
                exact
            />
            <Route
                path="/contact"
                render={props => (
                    <ContactContainer
                        history={props.history}
                        contactToShow={contactToShow}
                    />
                )}
            />
            <Route
                path="/favorites"
                render={props => (
                    <FavoritesContainer
                        history={props.history}
                        handleContactClick={handleContactClick}
                        handleEditClick={handleEditClick}
                    />
                )}
            />
            <Route path="/addContact" component={AddContactContainer} />
            <Route
                path="/editContact"
                render={props => (
                    <EditContactContainer
                        history={props.history}
                        itemToEdit={contactToShow}
                    />
                )}
            />
            <Route path="/404" component={Error404Container} />
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.contacts.contacts,
    };
};
export default connect(mapStateToProps)(Router);

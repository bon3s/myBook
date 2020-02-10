import React from 'react';
import { Switch, Route, RouterProps } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import AddContactContainer from '../containers/AddContactContainer';
import Error404Container from '../containers/ErrorContainer';
import EditContactContainer from '../containers/EditContactContainer';
import ContactContainer from '../containers/ContactContainer';
import { ContactType } from '../types/ContactType';

interface Props extends RouterProps {}

const Router = (props: Props) => {
    let itemForShow: ContactType = {
        id: '',
        name: '',
        email: '',
        numbers: [],
        favorite: false,
        image: '',
    };

    const passItemToShow = (item: ContactType) => {
        itemForShow = item;
        return;
    };

    return (
        <Switch>
            <Route
                path="/"
                render={(props: Props) => (
                    <HomeContainer
                        {...props}
                        handleContactClick={passItemToShow}
                        handleEditClick={passItemToShow}
                    />
                )}
                exact
            />
            <Route
                path="/contact"
                render={(props: Props) => (
                    <ContactContainer
                        {...props}
                        contactToShow={itemForShow}
                        handleEditClick={passItemToShow}
                    />
                )}
            />
            <Route
                path="/favorites"
                render={(props: Props) => (
                    <FavoritesContainer
                        {...props}
                        handleContactClick={passItemToShow}
                        handleEditClick={passItemToShow}
                    />
                )}
            />
            <Route path="/addContact" component={AddContactContainer} />
            <Route
                path="/editContact"
                render={(props: Props) => (
                    <EditContactContainer {...props} itemToEdit={itemForShow} />
                )}
            />
            <Route path="/404" component={Error404Container} />
        </Switch>
    );
};

export default Router;

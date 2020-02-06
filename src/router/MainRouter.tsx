import React from 'react';
import { Switch, Route } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import FavoritesContainer from '../containers/FavoritesContainer';
import AddContactContainer from '../containers/AddContactContainer';
import Error404Container from '../containers/ErrorContainer';
import EditContactContainer from '../containers/EditContactContainer';

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={HomeContainer} exact />
            <Route path="/favorites" component={FavoritesContainer} />
            <Route path="/addContact" component={AddContactContainer} />
            <Route path="/editContact" component={EditContactContainer} />
            <Route path="/404" component={Error404Container} />
        </Switch>
    );
};

export default Router;

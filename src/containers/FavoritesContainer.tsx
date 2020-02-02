import React, { Component } from 'react';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import { RouterProps } from 'react-router';

interface Props extends RouterProps {}
class FavoritesContainer extends Component<Props> {
    render() {
        return <FavoritesScreen history={this.props.history} />;
    }
}

export default FavoritesContainer;

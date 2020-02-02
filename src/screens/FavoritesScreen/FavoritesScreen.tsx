import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { FavoritesScreenStyles } from './styles/FavoritesScreenStyles';

interface Props extends RouterProps {}
interface State {}

const FavoritesScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <FavoritesScreenStyles></FavoritesScreenStyles>
        </ScreenWrapper>
    );
};

export default FavoritesScreen;

import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { RouterProps } from 'react-router';
import { AppState } from '../redux/AppState';
import { connect } from 'react-redux';
import { ContactType } from '../types/ContactType';
import { Dispatch } from 'redux';

interface Props extends RouterProps {
    contact: ContactType[];
    dispatch: Dispatch;
}

interface State {}

class HomeScreenContainer extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <HomeScreen
                contacts={this.props.contact}
                history={this.props.history}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    contact: state.contact.contacts,
});

export default connect(mapStateToProps)(HomeScreenContainer);

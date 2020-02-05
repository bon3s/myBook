import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { RouterProps } from 'react-router';
import AppState from '../redux/AppState';
import { ContactType } from '../types/ContactType';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface Props extends RouterProps {
    contacts: ContactType[];
    dispatch: Dispatch;
}

class HomeContainer extends Component<Props> {
    // constructor(props: Props) {
    //     super(props);
    // }

    public render() {
        return (
            <HomeScreen
                contacts={this.props.contacts}
                history={this.props.history}
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

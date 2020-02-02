import React, { Component } from 'react';
import { AddContactScreen } from '../screens/AddContactScreen/AddContactScreen';
import { RouterProps } from 'react-router';

interface Props extends RouterProps {}

class AddContactContainer extends Component<Props> {
    render() {
        return <AddContactScreen history={this.props.history} />;
    }
}

export default AddContactContainer;

import React from 'react';
import { AddContactItemStyles } from './styles/AddContactItemStyles';
import IconAdd from '../../assets/img/icons/icon_add.svg';
import { RouterProps } from 'react-router';

interface Props extends RouterProps {}

export const AddContactItem = (props: Props) => {
    return (
        <AddContactItemStyles onClick={() => props.history.push('/addContact')}>
            <div className="content-wrapper">
                <div className="icon-wrapper">
                    <img src={IconAdd} alt="icon add" />
                </div>
                <p className="btn-text">Add new</p>
            </div>
        </AddContactItemStyles>
    );
};

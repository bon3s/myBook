import React, { SyntheticEvent } from 'react';
import { ContactItemStyle } from './styles/ContactItemStyles';
import IconHeartEmpty from '../../assets/img/icons/icon_heart_empty.svg';
import IconHeartFull from '../../assets/img/icons/icon_heart_full.svg';
import IconEdit from '../../assets/img/icons/icon_edit.svg';
import IconDelete from '../../assets/img/icons/icon_delete.svg';
import { Button } from 'react-bootstrap';
import { ContactType } from '../../types/ContactType';

interface Props {
    contactData: ContactType;
    handleDeleteClick: (item: ContactType) => void;
    handleEditClick: (item: ContactType) => void;
    handleFavoriteClick: (id: string) => void;
}

export const ContactItem = (props: Props) => {
    return (
        <ContactItemStyle onClick={() => console.log('clicked')}>
            <Button
                className="favorite"
                onClick={() => props.handleFavoriteClick(props.contactData.id)}>
                {props.contactData.favorite === false ? (
                    <img src={IconHeartEmpty} alt="heart-empty" />
                ) : (
                    <img src={IconHeartFull} alt="heart-full" />
                )}
            </Button>
            <div className="edit-wrapper">
                <Button
                    className="edit"
                    onClick={(e: SyntheticEvent) => {
                        e.preventDefault();
                        props.handleEditClick(props.contactData);
                    }}>
                    <img src={IconEdit} alt="edit" />
                </Button>
                <Button
                    className="delete"
                    onClick={(e: SyntheticEvent) => {
                        e.preventDefault();
                        props.handleDeleteClick(props.contactData);
                    }}>
                    <img src={IconDelete} alt="delete" />
                </Button>
            </div>
            <div className="image-wrapper">
                <img src={props.contactData.image} alt="" />
            </div>
            <div className="info-wrapper">
                <h3>{props.contactData.name}</h3>
            </div>
        </ContactItemStyle>
    );
};

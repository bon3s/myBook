import React, { SyntheticEvent } from 'react';
import { ContactItemStyle } from './styles/ContactItemStyles';
import IconHeartEmpty from '../../assets/img/icons/icon_heart_empty.svg';
import IconHeartFull from '../../assets/img/icons/icon_heart_full.svg';
import IconEdit from '../../assets/img/icons/icon_edit.svg';
import IconDelete from '../../assets/img/icons/icon_delete.svg';
import { Button } from 'react-bootstrap';
import { ContactType } from '../../types/ContactType';
import { RouterProps } from 'react-router';

interface Props extends RouterProps {
    contactData: ContactType;
    handleDeleteClick: (item: ContactType) => void;
    handleEditClick: (id: string) => void;
    handleFavoriteClick: (id: string) => void;
    handleContactClick: (id: string) => void;
}

export const ContactItem = (props: Props) => {
    return (
        <ContactItemStyle
            onClick={(e: SyntheticEvent) => {
                e.preventDefault();
                props.handleContactClick(props.contactData.id);
                props.history.push('/contact');
            }}>
            <div className="contact-info-wrapper">
                <div className="image-wrapper">
                    {props.contactData.image !== '' ? (
                        <img src={props.contactData.image} alt="user avatar" />
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="info-wrapper">
                    <h3>{props.contactData.name}</h3>
                </div>
            </div>
            <div className="contact-icons-wrapper">
                <Button
                    className="favorite"
                    onClick={(e: SyntheticEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        props.handleFavoriteClick(props.contactData.id);
                    }}>
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
                            e.stopPropagation();
                            props.handleEditClick(props.contactData.id);
                            props.history.push('/editContact');
                        }}>
                        <img src={IconEdit} alt="edit" />
                    </Button>
                    <Button
                        className="delete"
                        onClick={(e: SyntheticEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            props.handleDeleteClick(props.contactData);
                        }}>
                        <img src={IconDelete} alt="delete" />
                    </Button>
                </div>
            </div>
        </ContactItemStyle>
    );
};

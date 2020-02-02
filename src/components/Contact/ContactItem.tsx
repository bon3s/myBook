import React from 'react';
import { ContactItemStyle } from './styles/ContactItemStyles';
import IconHeartEmpty from '../../assets/img/icons/icon_heart_empty.svg';
import IconHeartFull from '../../assets/img/icons/icon_heart_full.svg';
import IconEdit from '../../assets/img/icons/icon_edit.svg';
import IconDelete from '../../assets/img/icons/icon_delete.svg';
import { Button } from 'react-bootstrap';
import { ContactType } from '../../types/ContactType';

interface Props {
    favorite: boolean;
    contactData: ContactType;
}

export const ContactItem = (props: Props) => {
    return (
        <ContactItemStyle onClick={() => console.log('clicked')}>
            <Button className="favorite">
                {props.favorite === false ? (
                    <img src={IconHeartEmpty} alt="heart-empty" />
                ) : (
                    <img src={IconHeartFull} alt="heart-full" />
                )}
            </Button>
            <div className="edit-wrapper">
                <Button className="edit">
                    <img src={IconEdit} alt="edit" />
                </Button>
                <Button className="delete">
                    <img src={IconDelete} alt="delete" />
                </Button>
            </div>
            <div className="image-wrapper">
                <img src="https://loremflickr.com/60/60/girl" alt="" />
            </div>
            <div className="info-wrapper">
                <h3>{props.contactData.name}</h3>
            </div>
        </ContactItemStyle>
    );
};

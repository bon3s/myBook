import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { RouterProps } from 'react-router';
import { ContactType } from '../../types/ContactType';
import ScreenWrapper from '../ScreenWrapper';
import { ContactScreenStyles } from './styles/ContactScreenStyles';
import { BackButton } from '../AddContactScreen/styles/AddContactScreenStyles';
import IconHeartEmpty from '../../assets/img/icons/icon_heart_empty.svg';
import IconHeartFull from '../../assets/img/icons/icon_heart_full.svg';
import IconEdit from '../../assets/img/icons/icon_edit.svg';
interface Props extends RouterProps {
    contact: ContactType;
    handleEditClick: (item: ContactType) => void;
    handleFavoriteClick: (id: string) => void;
}

export const ContactScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <ContactScreenStyles>
                <Container>
                    <Row>
                        <Col
                            bsPrefix={
                                'col-lg-2 col-md-12 offset-lg-1 p-lg-0 align-items-center'
                            }>
                            <div className="avatar-wrapper">
                                <img
                                    src={props.contact.image}
                                    alt="User selected contact avatar"
                                />
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <div className="contact-toolbar">
                                <div className="left-column">
                                    <BackButton
                                        onClick={() => props.history.goBack()}>
                                        <i></i>
                                    </BackButton>
                                    <h1 className="contact-name">
                                        {props.contact.name}
                                    </h1>
                                </div>
                                <div className="right-column">
                                    <Button
                                        className="favorite"
                                        onClick={() =>
                                            props.handleFavoriteClick(
                                                props.contact.id
                                            )
                                        }>
                                        {props.contact.favorite === false ? (
                                            <img
                                                src={IconHeartEmpty}
                                                alt="heart-empty"
                                            />
                                        ) : (
                                            <img
                                                src={IconHeartFull}
                                                alt="heart-full"
                                            />
                                        )}
                                    </Button>
                                    <Button
                                        className="edit"
                                        onClick={(e: SyntheticEvent) => {
                                            e.preventDefault();
                                            props.handleEditClick(
                                                props.contact
                                            );
                                        }}>
                                        <img src={IconEdit} alt="edit" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ContactScreenStyles>
        </ScreenWrapper>
    );
};

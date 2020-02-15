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
    handleEditClick: (id: string) => void;
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
                                {props.contact.image !== '' ? (
                                    <img
                                        src={props.contact.image}
                                        alt="User selected contact avatar"
                                    />
                                ) : (
                                    <div></div>
                                )}
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
                                        onClick={(e: SyntheticEvent) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            props.handleFavoriteClick(
                                                props.contact.id
                                            );
                                        }}>
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
                                                props.contact.id
                                            );
                                            props.history.push('/editContact');
                                        }}>
                                        <img src={IconEdit} alt="edit" />
                                    </Button>
                                </div>
                            </div>
                            <div className="contact-content">
                                <Container>
                                    <div className="contact-item">
                                        <Row>
                                            <Col md={{ span: 3 }} sm={12}>
                                                <div className="label email">
                                                    <i></i>
                                                    <p>email</p>
                                                </div>
                                            </Col>
                                            <Col md={7} sm={12}>
                                                <p className="value email">
                                                    {props.contact.email}
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="contact-item">
                                        <Row>
                                            <Col md={{ span: 3 }} sm={12}>
                                                <div className="label numbers">
                                                    <i></i>
                                                    <p>numbers</p>
                                                </div>
                                            </Col>
                                            <Col md={7} sm={12}>
                                                <ul className="value-list">
                                                    {props.contact.numbers.map(
                                                        item => {
                                                            return (
                                                                <li
                                                                    key={
                                                                        item.id
                                                                    }>
                                                                    <p className="label">
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </p>
                                                                    <p className="numberValue">
                                                                        {
                                                                            item.number
                                                                        }
                                                                    </p>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ContactScreenStyles>
        </ScreenWrapper>
    );
};

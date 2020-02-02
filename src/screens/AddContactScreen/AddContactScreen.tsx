import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
    AddContactScreenStyles,
    ImageUploadButton,
    BackButton,
    RemoveButton,
    AddButton,
} from './styles/AddContactScreenStyles';
import ScreenWrapper from '../ScreenWrapper';
import { RouterProps } from 'react-router';
import { CustomFormGroup } from './styles/AddContactScreenStyles';
import GenericButton from '../../components/GenericComponents/GenericButton';
import { theme } from '../../components/Theme/theme';

interface Props extends RouterProps {}

export const AddContactScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <AddContactScreenStyles>
                <Container>
                    <Row>
                        <Col
                            bsPrefix={
                                'col-lg-2 col-md-12 offset-lg-1 p-lg-0 align-items-center'
                            }>
                            <div className="upload-wrapper">
                                <ImageUploadButton
                                    onClick={() => props.history.push('/')}>
                                    <i></i>
                                    {/* <img src={IconUpload} alt="Icon upload" /> */}
                                </ImageUploadButton>
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <div className="form-wrapper">
                                <div className="form-toolbar">
                                    <BackButton
                                        onClick={() => props.history.goBack()}>
                                        <i></i>
                                    </BackButton>
                                </div>
                                <Form className={'addContactForm'}>
                                    <Form.Group
                                        id={'addContactNameInput'}
                                        controlId="addContactNameInput"
                                        bsPrefix={'form-group addContactName'}>
                                        <div className="label-wrapper name">
                                            <i></i>
                                            <Form.Label>full name</Form.Label>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        id={'addContactEmailInput'}
                                        controlId="addContactEmailInput"
                                        bsPrefix={'form-group addContactEmail'}>
                                        <div className="label-wrapper email">
                                            <i></i>
                                            <Form.Label>email</Form.Label>
                                        </div>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </Form.Group>
                                    <CustomFormGroup
                                        id={'addContactNumbersInput'}
                                        controlId="addContactNumbers"
                                        bsPrefix={
                                            'form-group addContactNumbers'
                                        }>
                                        <div className="label-wrapper numbers">
                                            <i></i>
                                            <Form.Label>Numbers</Form.Label>
                                        </div>
                                        <div className="multiple-inputs">
                                            <Form.Row>
                                                <Col md={6} sm={12}>
                                                    <Form.Control
                                                        bsPrefix={
                                                            'form-control label-input'
                                                        }
                                                        placeholder="Number"
                                                    />
                                                </Col>
                                                <Col md={5} sm={12}>
                                                    <Form.Control
                                                        bsPrefix={
                                                            'form-control number-input'
                                                        }
                                                        className={
                                                            'number-input'
                                                        }
                                                        placeholder="Cell"
                                                    />
                                                </Col>
                                                <Col md={1} sm={12}>
                                                    <RemoveButton>
                                                        <i></i>
                                                    </RemoveButton>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col md={6} sm={12}>
                                                    <Form.Control
                                                        bsPrefix={
                                                            'form-control label-input'
                                                        }
                                                        placeholder="Number"
                                                    />
                                                </Col>
                                                <Col md={5} sm={12}>
                                                    <Form.Control
                                                        bsPrefix={
                                                            'form-control number-input'
                                                        }
                                                        className={
                                                            'number-input'
                                                        }
                                                        placeholder="Cell"
                                                    />
                                                </Col>
                                                <Col md={1} sm={12}>
                                                    <RemoveButton>
                                                        <i></i>
                                                    </RemoveButton>
                                                </Col>
                                            </Form.Row>
                                            <div className="addMoreInputsWrapper">
                                                <AddButton>
                                                    <div className="icon-wrapper">
                                                        <i></i>
                                                    </div>
                                                    <p>Add number</p>
                                                </AddButton>
                                            </div>
                                        </div>
                                        <div className="form-footer">
                                            <GenericButton
                                                backgroundColor={
                                                    theme.colors.gray3
                                                }
                                                buttonText={'Cancel'}
                                            />
                                            <GenericButton
                                                backgroundColor={
                                                    theme.colors.primary
                                                }
                                                buttonText={'Save'}
                                            />
                                        </div>
                                    </CustomFormGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </AddContactScreenStyles>
        </ScreenWrapper>
    );
};

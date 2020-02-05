import React, { useState, SyntheticEvent } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
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
import uuid from 'uuid';

interface Props extends RouterProps {
    handleSaveClick: (name: string, email: string) => void;
}

export const AddContactScreen = (props: Props) => {
    interface renderItems {
        id: string;
        label: string;
        number: string;
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const initialState: renderItems[] = [{ id: uuid(), label: '', number: '' }];

    const [toRender, setToRender] = useState(initialState);

    const addCustomInputRow = () => {
        const newItem = { id: uuid(), label: '', number: '' };
        setToRender([...toRender, newItem]);
    };

    const removeCustomInputRow = (id: string) => {
        const newRender = toRender.filter(item => item.id !== id);
        setToRender(newRender);
    };

    const handleCancelClick = () => {
        setName('');
        setEmail('');
        setToRender(initialState);
        props.history.goBack();
    };

    const updateNumber = (index: number) => (e: any) => {
        let newArr = [...toRender];
        newArr[index].number = e.target.value;
        setToRender(newArr);
    };

    const updateLabel = (index: number) => (e: any) => {
        let newArr = [...toRender];
        newArr[index].label = e.target.value;
        setToRender(newArr);
    };

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
                                        bsPrefix={'form-group addContactName'}>
                                        <div className="label-wrapper name">
                                            <i></i>
                                            <Form.Label>full name</Form.Label>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e: SyntheticEvent) => {
                                                let element = e.target as HTMLInputElement;
                                                setName(element.value);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        id={'addContactEmailInput'}
                                        bsPrefix={'form-group addContactEmail'}>
                                        <div className="label-wrapper email">
                                            <i></i>
                                            <Form.Label>email</Form.Label>
                                        </div>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e: SyntheticEvent) => {
                                                let element = e.target as HTMLInputElement;
                                                setEmail(element.value);
                                            }}
                                        />
                                    </Form.Group>
                                    <CustomFormGroup
                                        id={'addContactNumbersInput'}
                                        bsPrefix={
                                            'form-group addContactNumbers'
                                        }>
                                        <div className="label-wrapper numbers">
                                            <i></i>
                                            <Form.Label>Numbers</Form.Label>
                                        </div>
                                        <div className="multiple-inputs">
                                            {toRender.length > 0 ? (
                                                toRender.map(
                                                    (
                                                        item: {
                                                            id: string;
                                                            label: string;
                                                            number: string;
                                                        },
                                                        index
                                                    ) => (
                                                        <Form.Row
                                                            id={item.id}
                                                            key={item.id}>
                                                            <Col md={6} sm={12}>
                                                                <Form.Control
                                                                    bsPrefix={
                                                                        'form-control label-input'
                                                                    }
                                                                    id={
                                                                        'label-' +
                                                                        item.id
                                                                    }
                                                                    onChange={updateLabel(
                                                                        index
                                                                    )}
                                                                    placeholder="Label"
                                                                />
                                                            </Col>
                                                            <Col md={5} sm={12}>
                                                                <Form.Control
                                                                    bsPrefix={
                                                                        'form-control number-input'
                                                                    }
                                                                    id={
                                                                        'number-' +
                                                                        item.id
                                                                    }
                                                                    onChange={updateNumber(
                                                                        index
                                                                    )}
                                                                    className={
                                                                        'number-input'
                                                                    }
                                                                    placeholder="Number"
                                                                />
                                                            </Col>
                                                            <Col md={1} sm={12}>
                                                                <RemoveButton
                                                                    onClick={() =>
                                                                        removeCustomInputRow(
                                                                            item.id
                                                                        )
                                                                    }>
                                                                    <i></i>
                                                                </RemoveButton>
                                                            </Col>
                                                        </Form.Row>
                                                    )
                                                )
                                            ) : (
                                                <div></div>
                                            )}
                                            <div className="addMoreInputsWrapper">
                                                <AddButton
                                                    onClick={addCustomInputRow}>
                                                    <div className="icon-wrapper">
                                                        <i></i>
                                                    </div>
                                                    <p>Add number</p>
                                                </AddButton>
                                            </div>
                                        </div>
                                        <div className="form-footer">
                                            <GenericButton
                                                handleClick={() =>
                                                    handleCancelClick
                                                }
                                                backgroundColor={
                                                    theme.colors.gray3
                                                }
                                                buttonText={'Cancel'}
                                            />
                                            <GenericButton
                                                handleClick={() =>
                                                    props.handleSaveClick
                                                }
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

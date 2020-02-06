import React, { useState, SyntheticEvent } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
    EditContactScreenStyles,
    ImageUploadButton,
    BackButton,
    RemoveButton,
    AddButton,
} from './styles/EditContactScreenStyles';
import ScreenWrapper from '../ScreenWrapper';
import { RouterProps } from 'react-router';
import { CustomFormGroup } from './styles/EditContactScreenStyles';
import GenericButton from '../../components/GenericComponents/GenericButton';
import { theme } from '../../components/Theme/theme';
import uuid from 'uuid';
import { ContactType } from '../../types/ContactType';
import { CustomFieldsType } from '../../types/CustomFieldsType';
import IconDelete from '../../assets/img/icons/icon_delete.svg';

interface Props extends RouterProps {
    handleSaveClick: (item: ContactType) => void;
    handleDeleteClick: (item: ContactType) => void;
    itemToEdit: ContactType;
}

export const EditContactScreen = (props: Props) => {
    const [name, setName] = useState(props.itemToEdit.name);
    const [email, setEmail] = useState(props.itemToEdit.email);
    const [image, setImage] = useState(props.itemToEdit.image);
    const initialState: CustomFieldsType[] = props.itemToEdit.numbers.map(
        item => {
            return { id: item.id, label: item.label, number: item.number };
        }
    );

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
        props.history.goBack();
    };

    const updateNumber = (index: number) => (e: any) => {
        let newArr = [...toRender];
        newArr[index].number = e.target.value;
        setToRender(newArr);
    };

    const handleLoadLocalFile = (event: any) => {
        event.preventDefault();
        const file = event.target.files[0];
        const localImageUrl = window.URL.createObjectURL(file);
        setImage(localImageUrl);
        console.log(image);
    };

    const updateLabel = (index: number) => (e: any) => {
        let newArr = [...toRender];
        newArr[index].label = e.target.value;
        setToRender(newArr);
    };

    const handleSaveClick = () => {
        if (
            name !== '' &&
            email !== '' &&
            toRender.length > 0 &&
            toRender[0].label !== '' &&
            toRender[0].number !== ''
        ) {
            const id = props.itemToEdit.id;
            const contactItem = {
                id: id,
                name: name,
                email: email,
                image: image,
                numbers: toRender,
            };
            props.handleSaveClick(contactItem);
        }
    };

    return (
        <ScreenWrapper history={props.history}>
            <EditContactScreenStyles>
                <Container>
                    <Row>
                        <Col
                            bsPrefix={
                                'col-lg-2 col-md-12 offset-lg-1 p-lg-0 align-items-center'
                            }>
                            <div className="upload-wrapper">
                                <ImageUploadButton>
                                    {image !== '' ? (
                                        <img src={image} alt="Icon upload" />
                                    ) : (
                                        <div></div>
                                    )}
                                    <div className="input-wrapper">
                                        <input
                                            name="imageInput"
                                            id="imageInput"
                                            className="imageInput"
                                            type="file"
                                            onChange={handleLoadLocalFile}
                                        />
                                        <label htmlFor="imageInput">
                                            {image !== '' ? (
                                                <i className={'hidden'}></i>
                                            ) : (
                                                <i></i>
                                            )}
                                        </label>
                                    </div>
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
                                    <Button
                                        className="delete"
                                        onClick={(e: SyntheticEvent) => {
                                            e.preventDefault();
                                            props.handleDeleteClick(
                                                props.itemToEdit
                                            );
                                        }}>
                                        <img src={IconDelete} alt="delete" />
                                    </Button>
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
                                                                    value={
                                                                        item.label
                                                                    }
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
                                                                    value={
                                                                        item.number
                                                                    }
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
                                                    handleCancelClick()
                                                }
                                                backgroundColor={
                                                    theme.colors.gray3
                                                }
                                                buttonText={'Cancel'}
                                            />
                                            <GenericButton
                                                handleClick={() =>
                                                    handleSaveClick()
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
            </EditContactScreenStyles>
        </ScreenWrapper>
    );
};

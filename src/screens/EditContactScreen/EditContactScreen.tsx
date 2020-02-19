import React, { useState, SyntheticEvent, useEffect } from 'react';
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
import ErrorPrompt from '../../components/ValidationError/ErrorPrompt';
import downscale from 'downscale';
import validation, {
    ValidationSummaryType,
    validationTypes,
} from '../../components/ValidationError/validation';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

interface Props extends RouterProps {
    itemToEdit: ContactType;
    modalVisible: boolean;
    contactDeleteId: string;
    handleSaveClick: (item: ContactType) => void;
    handleModalClose: () => void;
    handleDeleteClick: (item: ContactType) => void;
    handleDeleteContact: (id: string) => void;
}

export const EditContactScreen = (props: Props) => {
    const [name, setName] = useState(props.itemToEdit.name);
    const [email, setEmail] = useState(props.itemToEdit.email);
    const [image, setImage] = useState(props.itemToEdit.image);
    const [fieldFilled, setFieldFilled] = useState(true);
    const [emailValid, setEmailValid] = useState({
        msg: '',
        valid: false,
    });

    const [phoneValid, setPhoneValid] = useState([
        {
            msg: '',
            valid: false,
        },
    ]);

    const [nameValid, setNameValid] = useState({
        msg: '',
        valid: false,
    });

    const [imageValid, setImageValid] = useState({
        msg: '',
        valid: false,
    });

    const initialCustomRowState: CustomFieldsType[] = props.itemToEdit.numbers.map(
        item => {
            return {
                id: item.id,
                label: item.label,
                number: item.number,
            };
        }
    );

    const [toRender, setToRender] = useState(initialCustomRowState);

    useEffect(() => {
        let allPhonesValid = false;

        if (phoneValid.length > 0) {
            allPhonesValid = phoneValid.every((item: ValidationSummaryType) =>
                item.valid === true ? true : false
            );
        } else {
            allPhonesValid = true;
        }

        if (
            allPhonesValid === true &&
            emailValid.valid === true &&
            imageValid.valid === true &&
            nameValid.valid === true
        ) {
            const contactItem = {
                id: props.itemToEdit.id,
                name: name,
                email: email,
                image: image,
                favorite: false,
                numbers: toRender,
            };
            props.handleSaveClick(contactItem);
        }
    });

    const addCustomInputRow = () => {
        if (
            toRender[toRender.length - 1].label !== '' &&
            toRender[toRender.length - 1].number !== ''
        ) {
            const newItem = {
                id: uuid(),
                label: '',
                number: '',
                validation: { msg: '', validated: false },
            };
            setFieldFilled(true);
            setToRender([...toRender, newItem]);
        } else {
            setFieldFilled(false);
        }
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

    const handleLoadLocalFile = async (e: any) => {
        e.preventDefault();
        const imageFile = e.target.files[0];
        const scaledImage = await downscale(imageFile, 180, 180);
        setImage(scaledImage);
    };

    const updateLabel = (index: number) => (e: any) => {
        let newArr = [...toRender];
        newArr[index].label = e.target.value;
        setToRender(newArr);
    };

    const handleSaveClick = () => {
        const emailValidRes = validation(validationTypes.email, email);
        setEmailValid(emailValidRes);

        const phoneValidRes: ValidationSummaryType[] = toRender.map(item =>
            validation(validationTypes.phone, item.number)
        );
        setPhoneValid(phoneValidRes);

        const imageValidRes = validation(validationTypes.image, image);
        setImageValid(imageValidRes);

        const nameValidRes = validation(validationTypes.general, name);
        setNameValid(nameValidRes);
    };

    return (
        <ScreenWrapper history={props.history}>
            <EditContactScreenStyles>
                <Container>
                    <Row>
                        <Col bsPrefix={'p-0 col-sm-12 col-12'}>
                            <div className="form-toolbar-mobile">
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
                        </Col>
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
                                        <ErrorPrompt
                                            msg={
                                                emailValid !== undefined
                                                    ? emailValid.msg
                                                    : ''
                                            }
                                            valid={
                                                emailValid !== undefined
                                                    ? emailValid.valid
                                                    : true
                                            }
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
                                                        <div
                                                            key={item.id}
                                                            className="form-row-wrapper">
                                                            <Form.Row
                                                                id={item.id}>
                                                                <Col
                                                                    md={6}
                                                                    sm={12}>
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
                                                                <Col
                                                                    md={5}
                                                                    sm={11}
                                                                    xs={10}>
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
                                                                <Col
                                                                    md={1}
                                                                    sm={1}
                                                                    xs={2}>
                                                                    <div className="remove-button-wrapper">
                                                                        <RemoveButton
                                                                            onClick={() =>
                                                                                removeCustomInputRow(
                                                                                    item.id
                                                                                )
                                                                            }>
                                                                            <i></i>
                                                                        </RemoveButton>
                                                                    </div>
                                                                </Col>
                                                            </Form.Row>
                                                            <ErrorPrompt
                                                                msg={
                                                                    phoneValid[
                                                                        index
                                                                    ] !==
                                                                    undefined
                                                                        ? phoneValid[
                                                                              index
                                                                          ].msg
                                                                        : ''
                                                                }
                                                                valid={
                                                                    phoneValid[
                                                                        index
                                                                    ] !==
                                                                    undefined
                                                                        ? phoneValid[
                                                                              index
                                                                          ]
                                                                              .valid
                                                                        : true
                                                                }
                                                            />
                                                        </div>
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
                                                <ErrorPrompt
                                                    valid={fieldFilled}
                                                    msg="Please fill out previously added field before adding a new one."
                                                />
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
            <DeleteModal
                visible={props.modalVisible}
                handleModalClose={props.handleModalClose}
                contactDeleteId={props.contactDeleteId}
                handleDeleteContact={props.handleDeleteContact}
            />
        </ScreenWrapper>
    );
};

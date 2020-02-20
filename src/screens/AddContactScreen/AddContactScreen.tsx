import React, { useState, SyntheticEvent, useEffect } from 'react';
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
import { ContactType } from '../../types/ContactType';
import { CustomFieldsType } from '../../types/CustomFieldsType';
import downscale from 'downscale';
import validation, {
    ValidationSummaryType,
} from '../../components/ValidationError/validation';
import { validationTypes } from '../../components/ValidationError/validation';
import ErrorPrompt from '../../components/ValidationError/ErrorPrompt';

interface Props extends RouterProps {
    handleSaveClick: (item: ContactType) => void;
}

export const AddContactScreen = (props: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

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

    const initialCustomRowState: CustomFieldsType[] = [
        {
            id: uuid(),
            label: '',
            number: '',
        },
    ];

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
            const id = uuid();
            const contactItem = {
                id: id,
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
        console.log(e.target.files);
        if (e.target.files.length > 0 && e.target.files[0] !== '') {
            const imageFile = e.target.files[0];
            const scaledImage = await downscale(imageFile, 180, 180);
            setImage(scaledImage);
        } else {
            return;
        }
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
            <AddContactScreenStyles>
                <Container>
                    <Row>
                        <Col bsPrefix={'p-0 col-sm-12 col-12'}>
                            <div className="form-toolbar-mobile">
                                <BackButton
                                    onClick={() => props.history.goBack()}>
                                    <i></i>
                                </BackButton>
                            </div>
                        </Col>
                        <Col
                            bsPrefix={
                                'col-lg-2 col-md-12 offset-lg-1 p-lg-0  align-items-center'
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
                                            accept={'image/*'}
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
                            <ErrorPrompt
                                msg={
                                    imageValid !== undefined
                                        ? imageValid.msg
                                        : ''
                                }
                                valid={
                                    imageValid !== undefined
                                        ? imageValid.valid
                                        : true
                                }
                            />
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
                                        <ErrorPrompt
                                            msg={
                                                nameValid !== undefined
                                                    ? nameValid.msg
                                                    : ''
                                            }
                                            valid={
                                                nameValid !== undefined
                                                    ? nameValid.valid
                                                    : true
                                            }
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
                                                            className="form-row-wrapper"
                                                            key={item.id}>
                                                            <Form.Row
                                                                id={item.id}
                                                                className={
                                                                    index !==
                                                                        0 &&
                                                                    index ===
                                                                        toRender.length -
                                                                            1
                                                                        ? 'last'
                                                                        : ''
                                                                }>
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
                                                                        placeholder="Number"
                                                                    />
                                                                </Col>
                                                                <Col
                                                                    md={1}
                                                                    sm={1}
                                                                    xs={1}>
                                                                    <RemoveButton
                                                                        className={
                                                                            index !==
                                                                                0 &&
                                                                            index ===
                                                                                toRender.length -
                                                                                    1
                                                                                ? 'last'
                                                                                : ''
                                                                        }
                                                                        onClick={() =>
                                                                            removeCustomInputRow(
                                                                                item.id
                                                                            )
                                                                        }>
                                                                        <i></i>
                                                                    </RemoveButton>
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
            </AddContactScreenStyles>
        </ScreenWrapper>
    );
};

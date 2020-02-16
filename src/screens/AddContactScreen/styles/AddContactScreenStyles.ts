import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { theme } from '../../../components/Theme/theme';
import IconUpload from '../../../assets/img/icons/icon_upload.svg';
import IconBack from '../../../assets/img/icons/icon_arrow_back.svg';
import IconPerson from '../../../assets/img/icons/icon_person.svg';
import IconMail from '../../../assets/img/icons/icon_email.svg';
import IconPhone from '../../../assets/img/icons/icon_phone.svg';
import IconRemoveGreen from '../../../assets/img/icons/icon_remove_green.svg';
import IconRemoveGray from '../../../assets/img/icons/icon_remove_gray.svg';
import IconAdd from '../../../assets/img/icons/icon_add.svg';
import { Form } from 'react-bootstrap';

export const AddContactScreenStyles = styled.div`
    padding: 60px 0 78px;
    .form-toolbar-mobile {
        display: none;
    }
    .upload-wrapper {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 100%;
        position: relative;
        cursor: pointer;
    }
    .form-wrapper {
        padding-top: 39px;
        .form-toolbar {
            padding: 0 0 36px 12px;
            border-bottom: 1px solid ${theme.colors.primary};
        }
        .addContactForm {
            .form-group {
                padding: 18px 0 30px;
                margin: 0;
                border-bottom: 1px solid ${theme.colors.primary};
                .label-wrapper {
                    i {
                        display: inline-block;
                        padding: 0;
                        margin: 0;
                    }
                    label {
                        color: #2da1ad;
                        font-family: ${theme.fonts.fontRegular};
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19px;
                        text-align: left;
                        margin: 0 0 0 15px;
                        padding: 0;
                        text-transform: lowercase;
                        display: inline-block;
                    }

                    &.name {
                        i {
                            width: 15px;
                            height: 15px;
                            background: url(${IconPerson}) no-repeat;
                            background-size: cover;
                        }
                    }
                    &.email {
                        i {
                            width: 15px;
                            height: 10px;
                            background: url(${IconMail}) no-repeat;
                            background-size: cover;
                        }
                    }
                    &.numbers {
                        i {
                            width: 14px;
                            height: 14px;
                            background: url(${IconPhone}) no-repeat;
                            background-size: cover;
                        }
                    }
                }
                input {
                    margin: 22px 0 0;
                    border: 1px solid ${theme.colors.gray3};
                    border-radius: 4px;
                    opacity: 0.4000000059604645;
                    padding: 16px 24px 18px 24px;
                    height: 60px;
                    font-family: ${theme.fonts.fontRegular};
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 17px;
                    text-align: left;
                    max-width: 300px;
                    &:hover,
                    &:focus,
                    &:active {
                        border: 1px solid ${theme.colors.gray3};
                        outline: none;
                        box-shadow: none;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 578px) {
        padding: 0;
        .form-toolbar-mobile {
            padding: 13px 29px;
            border-bottom: 1px solid ${theme.colors.gray3};
            display: flex;
            justify-content: space-between;
        }
        .upload-wrapper {
            padding: 23px 0 25px;
            border-bottom: 1px solid ${theme.colors.primary};
        }
        .form-wrapper {
            padding: 0;
            .form-toolbar {
                display: none;
            }
            .addContactForm {
                .form-group {
                    padding: 18px 0 26px;
                    input {
                        margin: 15px 0 0;
                        max-width: 100%;
                    }
                }
            }
        }
    }
`;

export const ImageUploadButton = styled.div`
    display: inline-block;
    width: 180px;
    height: 180px;
    overflow: hidden;
    padding: 0;
    margin: 0 auto;
    outline: none;
    box-shadow: none;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    background: ${theme.colors.primaryBleached};
    border: 3px solid ${theme.colors.gray3bleached};
    img {
        width: 100%;
        height: auto;
        max-width: 100%;
        object-fit: cover;
        z-index: 5;
    }
    .input-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        z-index: 7;
        input[type='file'] {
            opacity: 0;
            position: absolute;
            pointer-events: none;
            // alternative to pointer-events, compatible with all browsers, just make it impossible to find
            width: 1px;
            height: 1px;
        }

        input[type='file'] + label {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            overflow: hidden;
            padding: 0;
            margin: 0 auto;
            outline: none;
            box-shadow: none;
            cursor: pointer;
            position: relative;
            i {
                width: 21px;
                height: 19px;
                display: block;
                background: url(${IconUpload}) no-repeat;
                background-size: cover;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 3;

                /* &.hidden {
                    opacity: 0;
                    transition: opacity 0.35s ease;
                } */
            }

            &:focus,
            &:hover {
                i {
                    &.hidden {
                        opacity: 1;
                    }
                }
            }
        }
    }
    &:hover,
    &:focus,
    &:active {
        background: ${theme.colors.primaryBleached}!important;
        outline: none !important;
        box-shadow: none !important;
        border: 3px solid ${theme.colors.gray3bleached}!important;
    }
    @media only screen and (max-width: 578px) {
        width: 150px;
        height: 150px;
        .input-wrapper {
            input[type='file'] + label {
                width: 150px;
                height: 150px;
            }
        }
    }
`;

export const BackButton = styled(Button)`
    && {
        display: block;
        width: auto;
        height: auto;
        background: transparent;
        border: none;
        border-radius: 0;
        overflow: hidden;
        padding: 0;
        margin: 0;
        outline: none;
        box-shadow: none;
        position: relative;
        i {
            display: inline-block;
            width: 20px;
            height: 12px;
            background: url(${IconBack}) no-repeat;
            background-size: cover;
            padding: 0;
            margin: 0;
        }

        &:hover,
        &:focus,
        &:active {
            background: transparent !important;
            outline: none !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
        }
    }
`;

export const RemoveButton = styled(Button)`
    background: transparent;
    width: 31px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.gray3};
    border-radius: 50%;
    padding: 0;
    margin: 36px 0 0;
    i {
        width: 16px;
        height: 16px;
        background: url(${IconRemoveGray}) no-repeat;
        background-size: cover;
    }

    &.last {
        border: 1px solid ${theme.colors.primary};
        i {
            width: 8px;
            height: 8px;
            background: url(${IconRemoveGreen}) no-repeat;
            background-size: cover;
        }
    }

    &:hover,
    &:active,
    &:focus {
        border: 1px solid ${theme.colors.gray3}!important;
        box-shadow: none !important;
        outline: none !important;
        background: none !important;
    }
`;

export const AddButton = styled(Button)`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0;
    padding: 0;
    .icon-wrapper {
        width: 31px;
        height: 31px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${theme.colors.primary};
        border-radius: 50%;
        padding: 0;
        i {
            width: 8px;
            height: 8px;
            background: url(${IconAdd}) no-repeat;
            background-size: cover;
        }

        &:hover,
        &:active,
        &:focus {
            border: 1px solid ${theme.colors.primary}!important;
            box-shadow: none !important;
            outline: none !important;
            background: none !important;
        }
    }
    p {
        color: ${theme.colors.primary};
        font-family: ${theme.fonts.fontRegular};
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        text-align: left;
        margin: 0 0 0 15px;
        padding: 0;
    }

    &:hover,
    &:active,
    &:focus {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        background: none !important;
    }
`;

export const CustomFormGroup = styled(Form.Group)`
    && {
        border: none !important;
        .multiple-inputs {
            .form-row {
                .form-control {
                    &.number-input {
                        max-width: 240px;
                    }
                }
                &.last {
                    .form-control {
                        border-color: ${theme.colors.primary};
                    }
                }
            }
            .addMoreInputsWrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                margin-top: 45px;
                .btn-primary {
                    margin-top: 0;
                }
                p {
                }
            }
        }
        .form-footer {
            margin-top: 105px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    @media only screen and (max-width: 991px) {
        .multiple-inputs {
            .form-row {
                .form-control {
                    &.number-input {
                        max-width: 100% !important;
                    }
                    &.label-input {
                        max-width: 100%;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 578px) {
        && {
            .multiple-inputs {
                .form-row-wrapper {
                    margin-top: 25px;
                    .remove-button-wrapper {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        height: 100%;
                        padding-top: 15px;
                        justify-content: center;
                        align-items: center;
                    }
                    .form-control {
                        &.number-input {
                            max-width: 100%;
                        }
                    }

                    &:first-child {
                        margin-top: 0;
                    }
                }
                .addMoreInputsWrapper {
                    margin-top: 40px;
                }
            }
            .form-footer {
                margin-top: 70px;
            }
        }
    }
`;

import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { theme } from '../../../components/Theme/theme';
import IconUpload from '../../../assets/img/icons/icon_upload.svg';
import IconBack from '../../../assets/img/icons/icon_arrow_back.svg';
import IconPerson from '../../../assets/img/icons/icon_person.svg';
import IconMail from '../../../assets/img/icons/icon_email.svg';
import IconPhone from '../../../assets/img/icons/icon_phone.svg';
import IconRemoveGray from '../../../assets/img/icons/icon_remove_gray.svg';
import IconAdd from '../../../assets/img/icons/icon_add.svg';
import { Form } from 'react-bootstrap';

export const AddContactScreenStyles = styled.div`
    padding: 60px 0 78px;
    .upload-wrapper {
        display: flex;
        align-content: center;
        justify-content: center;
        width: 100%;
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
`;

export const ImageUploadButton = styled(Button)`
    display: inline-block;
    width: 180px;
    height: 180px;
    background: ${theme.colors.primaryBleached};
    border: 3px solid ${theme.colors.gray3bleached};
    border-radius: 50%;
    overflow: hidden;
    padding: 0;
    margin: 0 auto;
    outline: none;
    box-shadow: none;
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
    }
    img {
        width: 100%;
        height: auto;
        max-width: 100%;
        object-fit: cover;
    }

    &:hover,
    &:focus,
    &:active {
        background: ${theme.colors.primaryBleached}!important;
        outline: none !important;
        box-shadow: none !important;
        border: 3px solid ${theme.colors.gray3bleached}!important;
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
        width: 8px;
        height: 8px;
        background: url(${IconRemoveGray}) no-repeat;
        background-size: cover;
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
            .form-control {
                &.number-input {
                    max-width: 240px;
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
`;

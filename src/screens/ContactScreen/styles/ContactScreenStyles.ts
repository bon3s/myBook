import styled from 'styled-components';
import { theme } from '../../../components/Theme/theme';
import IconEmail from '../../../assets/img/icons/icon_email.svg';
import IconPhone from '../../../assets/img/icons/icon_phone.svg';

export const ContactScreenStyles = styled.div`
    padding: 60px 0 78px;
    .avatar-wrapper-mobile {
        .avatar-wrapper {
            display: flex;
            align-content: center;
            justify-content: center;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            width: 180px;
            height: 180px;
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
        }
        h1 {
            color: ${theme.colors.gray3};
            font-family: ${theme.fonts.fontBold};
            font-size: 28px;
            font-weight: 700;
            line-height: 34px;
            text-align: center;
            padding: 0;
            margin: 0 0 0 21px;
            display: none;
        }
    }
    .contact-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px 27px 0;
        border-bottom: 1px solid ${theme.colors.primary};

        .left-column {
            display: flex;
            align-items: center;
            h1 {
                color: ${theme.colors.gray3};
                font-family: ${theme.fonts.fontBold};
                font-size: 28px;
                font-weight: 700;
                line-height: 34px;
                text-align: center;
                padding: 0;
                margin: 0 0 0 21px;
            }
        }
        .right-column {
            display: flex;
            align-items: center;

            .favorite {
                display: flex;
                width: 15px;
                height: 14px;
                background: transparent;
                border: none;
                box-shadow: none;
                outline: 0;
                border-radius: 0;
                padding: 0;
                margin: 0;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    object-fit: cover;
                }

                &:hover,
                &:focus,
                &:active {
                    background: transparent !important;
                    box-shadow: none !important;
                    outline: 0 !important;
                }
            }

            .edit {
                width: 16px;
                height: 16px;
                background: transparent;
                border: none;
                box-shadow: none;
                outline: none;
                border-radius: 0;
                padding: 0;
                margin: 0 0 0 44px;
                display: flex;
                justify-content: center;
                align-content: center;

                img {
                    width: 100%;
                    height: auto;
                    max-width: 100%;
                    object-fit: cover;
                }

                &:hover,
                &:focus,
                &:active {
                    background: transparent !important;
                    box-shadow: none !important;
                    outline: 0 !important;
                }
            }
        }
        &-mobile {
            display: none;
        }
    }

    .contact-content {
        padding: 64px 43px;
        .contact-item {
            margin-bottom: 71px;
            .label {
                display: flex;
                align-items: baseline;
                p {
                    color: ${theme.colors.primary};
                    font-family: ${theme.fonts.fontRegular};
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19px;
                    text-align: left;
                    text-transform: lowercase;
                    padding: 0;
                    margin: 0 0 0 15px;
                }
                &.email {
                    i {
                        width: 15px;
                        height: 10px;
                        background: url(${IconEmail}) no-repeat;
                        background-size: cover;
                        padding: 0;
                        margin: 0;
                    }
                }
                &.numbers {
                    i {
                        width: 15px;
                        height: 15px;
                        background: url(${IconPhone}) no-repeat;
                        background-size: cover;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
            .value {
                color: ${theme.colors.gray3};
                font-family: ${theme.fonts.fontRegular};
                font-size: 16px;
                font-weight: 400;
                line-height: 19px;
                text-align: left;
                padding: 0;
                margin: 0;
            }
            .value-list {
                padding: 0;
                margin: 0;
                list-style-type: none;
                li {
                    display: flex;
                    align-items: flex-start;
                    padding: 0;
                    margin: 0 0 40px 0;
                    .label {
                        color: ${theme.colors.gray3};
                        font-family: ${theme.fonts.fontRegular};
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 17px;
                        text-align: left;
                        text-transform: uppercase;
                        padding: 0;
                        margin: 0;
                        width: 50%;
                        word-break: break-word;
                    }
                    .numberValue {
                        color: ${theme.colors.gray3};
                        font-family: ${theme.fonts.fontRegular};
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 20px;
                        text-align: left;
                        text-transform: uppercase;
                        text-decoration: underline;
                        padding: 0;
                        margin: 0 0 0 46px;
                        max-width: 50%;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 768px) {
        .contact-content {
            .contact-item {
                .label {
                    margin-bottom: 18px;
                }
                .value-list {
                    li {
                        margin-bottom: 29px;
                        .numberValue {
                            margin: 0 0 0 58px;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 578px) {
        padding: 0;
        .contact-toolbar {
            display: none;
            &-mobile {
                display: block;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 13px 29px;
                border-bottom: 1px solid ${theme.colors.gray3};

                .left-column {
                    display: flex;
                    align-items: center;
                }
                .right-column {
                    display: flex;
                    align-items: center;

                    .favorite {
                        display: flex;
                        width: 15px;
                        height: 14px;
                        background: transparent;
                        border: none;
                        box-shadow: none;
                        outline: 0;
                        border-radius: 0;
                        padding: 0;
                        margin: 0;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 100%;
                            height: auto;
                            max-width: 100%;
                            object-fit: cover;
                        }

                        &:hover,
                        &:focus,
                        &:active {
                            background: transparent !important;
                            box-shadow: none !important;
                            outline: 0 !important;
                        }
                    }

                    .edit {
                        width: 16px;
                        height: 16px;
                        background: transparent;
                        border: none;
                        box-shadow: none;
                        outline: none;
                        border-radius: 0;
                        padding: 0;
                        margin: 0 0 0 34px;
                        display: flex;
                        justify-content: center;
                        align-content: center;

                        img {
                            width: 100%;
                            height: auto;
                            max-width: 100%;
                            object-fit: cover;
                        }

                        &:hover,
                        &:focus,
                        &:active {
                            background: transparent !important;
                            box-shadow: none !important;
                            outline: 0 !important;
                        }
                    }
                }
            }
        }
        .avatar-wrapper-mobile {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 23px 25px;
            margin: 0 25px;
            border-bottom: 1px solid ${theme.colors.primary};
            .avatar-wrapper {
                width: 50px;
                height: 50px;
                min-width: 50px;
                display: inline-flex;
                margin: 0;
            }
            h1 {
                font-size: 21px;
                line-height: 28px;
                display: inline-flex;
                word-break: break-word;
            }
        }
        .contact-content {
            padding: 31px 26px;
            .contact-item {
                margin-bottom: 50px;
                .label {
                    margin: 0 0 12px 0;
                    &.numbers {
                        margin: 0 0 22px 0;
                    }
                }
                .value-list {
                    li {
                        margin-bottom: 29px;
                        .numberValue {
                            margin: 0 0 0 58px;
                        }
                    }
                }
            }
        }
    }
`;

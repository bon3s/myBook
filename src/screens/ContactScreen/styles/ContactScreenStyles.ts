import styled from 'styled-components';
import { theme } from '../../../components/Theme/theme';

export const ContactScreenStyles = styled.div`
    padding: 60px 0 78px;
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
    }
`;

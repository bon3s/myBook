import styled from 'styled-components';
import { theme } from '../../Theme/theme';

export const ContactItemStyle = styled.div`
    margin-top: 30px;
    padding: 22px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray5};
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    min-height: 150px;

    .favorite {
        position: absolute;
        top: 15.5px;
        left: 17px;
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

    .edit-wrapper {
        position: absolute;
        top: 15.5px;
        right: 17px;
        width: 54px;
        height: auto;
        background: transparent;
        border: none;
        box-shadow: none;
        outline: none;
        border-radius: 0;
        padding: 0;
        margin: 0;
        display: flex;
        visibility: hidden;
        pointer-events: none;
        opacity: 0;
        justify-content: space-between;
        align-content: center;
        transition: all 0.5s ease;

        .edit {
            width: 16px;
            height: 16px;
            background: transparent;
            border: none;
            box-shadow: none;
            outline: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
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

        .delete {
            width: 13px;
            height: 17px;
            background: transparent;
            border: none;
            box-shadow: none;
            outline: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
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

    &:hover,
    &:active,
    &:focus {
        border: 1px solid ${theme.colors.primary};
        border-radius: 4px;
        .edit-wrapper {
            opacity: 1;
            visibility: visible;
            pointer-events: initial;
        }
    }

    .image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 7px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid ${theme.colors.gray6};
        overflow: hidden;
        background: ${theme.colors.white};

        img {
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: cover;
        }
    }
    .info-wrapper {
        margin-top: 16px;

        h3 {
            color: ${theme.colors.gray3};
            font-family: ${theme.fonts.fontBold};
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            text-align: center;
            padding: 0;
            margin: 0;
        }
    }
`;

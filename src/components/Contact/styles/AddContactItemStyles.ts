import styled from 'styled-components';
import { theme } from '../../Theme/theme';
import { Button } from 'react-bootstrap';

export const AddContactItemStyles = styled(Button)`
    margin-top: 30px;
    padding: 22px 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border: 1px dashed ${theme.colors.primary};
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    width: 100%;
    min-height: 150px;
    .content-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .icon-wrapper {
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
                max-width: 100%;
                height: auto;
                object-fit: cover;
            }
        }
        .btn-text {
            margin: 11px 0 0;
            padding: 0;
            color: ${theme.colors.primary};
            font-family: ${theme.fonts.fontRegular};
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
            text-align: left;
        }
    }
    &:hover,
    &:active,
    &:focus {
        background-color: ${theme.colors.white}!important;
        outline: none !important;
        box-shadow: none !important;
        border: 1px dashed ${theme.colors.primary} !important;
    }
`;

import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { theme } from '../Theme/theme';
import React from 'react';

interface Props {
    backgroundColor: string;
    buttonText: string;
}

const GenericButton = (props: Props) => {
    return (
        <GenericButtonStyles
            backgroundColor={props.backgroundColor}
            buttonText={props.buttonText}>
            <p className="button-label">{props.buttonText}</p>
        </GenericButtonStyles>
    );
};

const GenericButtonStyles = styled(Button)`
    && {
        background: ${props => props.backgroundColor};
        border-radius: 29px;
        width: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        padding: 11px 0 14px;
        height: auto;
        display: inline-block;
        .button-label {
            color: ${theme.colors.white};
            font-family: ${theme.fonts.fontRegular};
            font-size: 14px;
            font-weight: 700;
            line-height: 17px;
            text-align: center;
            padding: 0;
            margin: 0;
        }

        &:hover,
        &:active,
        &:focus {
            background: ${props => props.backgroundColor}!important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
        }
    }
`;

export default GenericButton;

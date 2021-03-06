import styled from 'styled-components';
import { theme } from '../../Theme/theme';

export const ErrorPromptStyles = styled.div`
    margin: 0;
    padding: 0;
    p {
        padding: 0;
        margin: 0;
        font-family: ${theme.fonts.fontRegular};
        color: ${theme.colors.validationError};
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        text-align: left;
    }
`;

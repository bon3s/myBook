import styled from 'styled-components';
import { theme } from '../../../components/Theme/theme';

export const ContactScreenStyles = styled.div`
    padding: 60px 0 78px;
    .avatar-wrapper {
        display: flex;
        align-content: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
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
        padding: 0 12px 36px 12px;
        border-bottom: 1px solid ${theme.colors.primary};

        .left-column {
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
`;

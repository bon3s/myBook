import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { theme } from '../../Theme/theme';

export const HeaderStyle = styled.div`
    .navbar {
        flex-direction: column;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        padding: 0;
        margin: 0;
        line-height: initial;
        font-size: initial;
        background: #fff;
        box-shadow: none;
        outline: none;
        position: relative;

        .brand-wrapper {
            background-image: linear-gradient(
                182.65deg,
                #78c9ce 0%,
                #2496a2 99.98%,
                #2496a2 100%
            );
            width: 100%;
            text-align: center;
            padding: 18px 0 16px;
            min-height: 60px;
            position: relative;
            .navbar-brand {
                padding: 0;
                margin: 0;
                font-size: initial;
                width: 178px;
                height: 18px;
                display: inline-block;
                img {
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                    object-fit: cover;
                    display: block;
                }
            }
            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                height: 7px;
                background-color: ${props => props.theme.colors.white};
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
                opacity: 0.3;
            }
        }
        .navbar-wrapper {
            .nav-main {
                padding: 0;
                margin: 0;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                box-shadow: none;
                outline: none;
                background: transparent;
                box-shadow: none;
                outline: none;
                padding: 50px 0 48px;
            }

            &:after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                width: 95%;
                margin: 0 auto;
                bottom: 0;
                height: 1px;
                margin: 0 auto;
                display: block;
                background: ${theme.colors.primary};
            }
        }
    }
`;

export const NavItem = styled(Nav.Item)`
    color: ${props =>
        props.primary === 'true'
            ? props.theme.colors.primary
            : props.theme.colors.gray3};
    font-family: ${props => props.theme.fonts.fontBold};
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    border-right: 1px solid ${props => props.theme.colors.gray3};
    padding: 0 31px;
    cursor: pointer;
    &:last-child {
        border: none;
    }
`;

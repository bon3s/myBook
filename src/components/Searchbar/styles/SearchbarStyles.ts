import styled from 'styled-components';
import IconSearch from '../../../assets/img/icons/icon_search.svg';
import { theme } from '../../Theme/theme';

export const SearchBarStyles = styled.div`
    padding: 59px 0 61px;
    .form-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        form {
            width: 100%;
            .form-group {
                padding: 0;
                margin: 0;
                .form-control {
                    background-color: #ffffff;
                    border: 1px solid #eaeaea;
                    border-radius: 4px;
                    box-shadow: 0 2px 34px 0 #e3e3e3;
                    width: 100%;
                    height: 60px;
                    outline: none;
                    background-image: url(${IconSearch});
                    background-size: 16px 17x;
                    background-position: 24px center;
                    background-repeat: no-repeat;
                    padding: 16px 24px 18px 64px;
                    color: #bbc4c3;
                    font-family: ${theme.fonts.fontRegular};
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 19px;
                    text-align: left;
                    ::-webkit-search-cancel-button {
                        box-sizing: content-box;
                        -webkit-appearance: none;
                        -webkit-box-sizing: content-box;
                        outline: none;
                    }
                }
            }
        }
    }
`;

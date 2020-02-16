import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { theme } from '../../Theme/theme';

const DeleteModalStyles = styled(Modal)`
    && {
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 14px 0 rgba(99, 109, 255, 0.27);
        max-width: 480px;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 50%;
        transform: translateY(-50%);
        height: auto;
        .modal-dialog {
            min-height: auto;
            height: auto;
            margin: 0;
            .modal-header {
                border: 1px solid #dcdcdc;
                padding: 20px 31px;
                .modal-title {
                    padding: 0;
                    margin: 0;
                    color: ${theme.colors.gray3};
                    font-family: ${theme.fonts.fontBold};
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 18px;
                    text-align: left;
                }
            }
            .modal-body {
                padding: 30px 31px;
                border: none;
                p {
                    padding: 0;
                    margin: 0;
                    color: ${theme.colors.gray3};
                    font-family: ${theme.fonts.fontRegular};
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 28px;
                    display: block;
                    text-align: center;
                }
            }
            .modal-footer {
                padding: 20px 31px 20px 31px;
                border: none;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    @media only screen and (max-width: 578px) {
        && {
            max-width: 315px;
            .modal-footer {
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
        }
    }
    @media only screen and (max-width: 375px) {
        && {
            max-width: 80%;
        }
    }
`;

export default DeleteModalStyles;

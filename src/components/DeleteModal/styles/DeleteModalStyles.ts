import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

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
            }
        }
    }
`;

export default DeleteModalStyles;

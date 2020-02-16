import React from 'react';
import { ValidationSummaryType } from './validation';
import { ErrorPromptStyles } from './styles/ErrorPromptStyles';

const ErrorPrompt = (props: ValidationSummaryType): JSX.Element => {
    if (props.valid === true) {
        return <div style={{ display: 'none' }}></div>;
    } else {
        return (
            <ErrorPromptStyles>
                <p>{props.msg}</p>
            </ErrorPromptStyles>
        );
    }
};

export default ErrorPrompt;

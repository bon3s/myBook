import React from 'react';
import { ValidationSummaryType } from './validation';
import { ErrorPromptStyles } from './styles/ErrorPromptStyles';

const ErrorPrompt = (props: ValidationSummaryType): JSX.Element => {
    if (props.valid === false && props.msg !== '') {
        return (
            <ErrorPromptStyles>
                <p style={{ padding: 0, marginTop: 18 }}>{props.msg}</p>
            </ErrorPromptStyles>
        );
    } else {
        return <div style={{ display: 'none' }}></div>;
    }
};

export default ErrorPrompt;

export enum validationTypes {
    email = 'emailValidation',
    phone = 'phoneValidation',
    image = 'imageValidation',
    general = 'generalValidation',
}

export interface ValidationSummaryType {
    msg: string;
    validated: boolean;
}

const validation = (
    type: validationTypes,
    value: string
): ValidationSummaryType => {
    let summary: ValidationSummaryType = {
        msg: '',
        validated: false,
    };

    const validateEmail = (value: string) => {
        function emailIsValid(email: string) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        if (
            value !== undefined &&
            value !== '' &&
            value !== null &&
            value !== ' '
        ) {
            if (emailIsValid(value) === true) {
                summary = {
                    msg: '',
                    validated: true,
                };
            } else {
                summary = {
                    msg: 'Please enter a valid email format.',
                    validated: false,
                };
            }
        } else {
            summary = {
                msg: 'Please enter an email address',
                validated: false,
            };
        }
    };

    const validatePhone = (value: string) => {
        function validMobileNumber(number: string) {
            let regex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/,
                result = regex.test(number);
            return result;
        }

        if (
            value !== undefined &&
            value !== '' &&
            value !== null &&
            value !== ' '
        ) {
            if (validMobileNumber(value) === true) {
                summary = {
                    msg: '',
                    validated: true,
                };
            } else {
                summary = {
                    msg: 'Please enter a valid phone number',
                    validated: false,
                };
            }
        } else {
            summary = {
                msg: 'Please enter a phone number',
                validated: false,
            };
        }
    };

    const validateGeneral = (value: string) => {
        if (
            value !== undefined &&
            value !== '' &&
            value !== null &&
            value !== ' '
        ) {
            summary = {
                msg: '',
                validated: true,
            };
        } else {
            summary = {
                msg:
                    'Field cannot be empty. Please enter a value or remove unnecesarry field.',
                validated: false,
            };
        }
    };

    const validateImage = (value: string) => {
        //ToDo validate max file size

        if (
            value !== undefined &&
            value !== '' &&
            value !== null &&
            value !== ' '
        ) {
            summary = {
                msg: '',
                validated: true,
            };
        } else {
            summary = {
                msg: 'Please upload a photo for this contact',
                validated: false,
            };
        }
    };

    switch (type) {
        case validationTypes.email:
            validateEmail(value);
            return summary;
        case validationTypes.phone:
            validatePhone(value);
            return summary;
        case validationTypes.image:
            validateImage(value);
            return summary;
        case validationTypes.general:
            validateGeneral(value);
            return summary;
        default:
            return summary;
    }
};

export default validation;

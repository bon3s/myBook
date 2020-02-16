export enum validationTypes {
    email = 'emailValidation',
    phone = 'phoneValidation',
    image = 'imageValidation',
    general = 'generalValidation',
}

export interface ValidationSummaryType {
    msg: string;
    valid: boolean;
}

const validation = (
    type: validationTypes,
    value: string
): ValidationSummaryType => {
    let summary: ValidationSummaryType = {
        msg: '',
        valid: false,
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
                    valid: true,
                };
            } else {
                summary = {
                    msg: 'Please enter a valid email format.',
                    valid: false,
                };
            }
        } else {
            summary = {
                msg: 'Please enter an email address',
                valid: false,
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
                    valid: true,
                };
            } else {
                summary = {
                    msg: 'Please enter a valid phone number',
                    valid: false,
                };
            }
        } else {
            summary = {
                msg: 'Please enter a phone number',
                valid: false,
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
                valid: true,
            };
        } else {
            summary = {
                msg:
                    'Field cannot be empty. Please enter a value or remove unnecesarry field.',
                valid: false,
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
                valid: true,
            };
        } else {
            summary = {
                msg: 'Please upload a photo for this contact',
                valid: false,
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

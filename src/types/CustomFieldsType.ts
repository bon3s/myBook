import { ValidationSummaryType } from '../components/ValidationError/validation';

export interface CustomFieldsType {
    id: string;
    label: string;
    number: string;
    validation: ValidationSummaryType;
}

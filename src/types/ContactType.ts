import { CustomFieldsType } from './CustomFieldsType';

export interface ContactType {
    id: string;
    name: string;
    email: string;
    image: string;
    favorite: boolean;
    numbers: CustomFieldsType[];
}
